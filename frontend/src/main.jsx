import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import "./index.css"; // Keep this if you're using Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster position="top-right" />
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);