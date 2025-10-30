import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

// For serving static HTML pages
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api/students", studentRoutes);

// Serve HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/students", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "studentList.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
