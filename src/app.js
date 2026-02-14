import express from "express";
import { hexToRgb } from "./hexToRgb.js";
export const app = express();
app.use(express.json());
app.get("/api/hex-to-rgb/:hex", (req, res) => {
  const input = req.params.hex;

  try {
    const rgb = hexToRgb(input);
    const norm = "#" + input.trim().replace(/^#/, "").toUpperCase().padStart(6, "0");
    res.json({ hex: norm, rgb });
  } catch (err) {
    res.status(400).json({
      error: "InvalidHex",
      message: "hex must be 3 or 6 hex digits (optionally with #)"
    });
  }
});