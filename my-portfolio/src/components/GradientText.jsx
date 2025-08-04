import { useState, useEffect } from "react";

// Mục đích: Hiển thị các dòng chữ như "Back End Developer", "Nguyen Anh Kiet" theo kiểu đánh chữ từng ký tự, sau đó xóa dần và hiện dòng mới – lặp lại liên tục. Dòng chữ có màu gradient động và hiệu ứng nhấp nháy dấu gạch đứng | (cursor).

// Definisikan teks yang akan ditampilkan secara bergantian
const TEXTS_TO_TYPE = ["Back End Developer", "Nguyen Anh Kiet"];

// Komponen utama
export default function LoopingGradientText({
  className = "", // Thêm class tùy chỉnh từ ngoài vào
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"], // Màu gradient mặc định
  animationSpeed = 3, // Tốc độ chuyển động gradient
  typingSpeed = 100, // Tốc độ đánh chữ (ms/1 ký tự)
  deletingSpeed = 75, // Tốc độ xóa chữ
  pauseDuration = 2000, // Thời gian dừng lại khi đánh xong (ms)
}) {
  const [textIndex, setTextIndex] = useState(0); //vị trí dòng chữ đang được đánh
  const [displayedText, setDisplayedText] = useState(""); //nội dung đang được hiển thị (dần tăng hoặc giảm).
  const [isDeleting, setIsDeleting] = useState(false); //đang xóa hay đang gõ.

  //   Mỗi lần displayedText, isDeleting... thay đổi thì:
  // Nếu đang xóa, giảm từng ký tự.
  // Nếu đang gõ, thêm từng ký tự.
  // Khi hoàn thành một dòng: dừng trong pauseDuration, sau đó chuyển sang xóa.
  // Khi xóa hết, chuyển sang dòng tiếp theo ((textIndex + 1) % TEXTS_TO_TYPE.length).

  useEffect(() => {
    const handleTyping = () => {
      const currentText = TEXTS_TO_TYPE[textIndex];

      // Logika untuk menghapus teks
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % TEXTS_TO_TYPE.length);
        }
      }
      // Logika untuk mengetik teks
      else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          // Jeda sejenak setelah selesai mengetik
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const typingInterval = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(handleTyping, typingInterval);

    // Membersihkan timeout saat komponen di-unmount
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    deletingSpeed,
    typingSpeed,
    pauseDuration,
  ]);

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    // Kontainer utama dibuat transparan, hapus kelas seperti 'backdrop-blur'
    <div
      className={`relative flex w-full items-center justify-start ${className}`}
    >
      {/* Teks dengan gradien */}
      <div
        className="inline-block relative z-2 text-left text-xl lg:text-3xl font-medium text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {/* Tampilkan teks yang sedang diketik */}
        <span>{displayedText}</span>

        {/* Kursor mengetik */}
        <span
          className="ml-1 inline-block h-5 w-0.5 animate-blink bg-white"
          style={{ height: "1.25em", verticalAlign: "bottom" }}
        />
      </div>
    </div>
  );
}
