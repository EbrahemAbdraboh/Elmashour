import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/legacy.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Missing #root mount point");
createRoot(rootElement).render(<App />);
