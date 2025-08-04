// src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Komponen wrapper utama yang mengelola status pemuatan
 * dan beralih antara Preloader dan aplikasi utama.
 */
const Main = () => {
  return (
    <>
      <App />
    </>
  );
};

// Render komponen Main ke dalam DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
