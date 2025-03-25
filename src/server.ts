import dotenv from "dotenv";
import path from "path";
import app from "./app";
import settings from "./core/config/settings";
import { connectDB } from "./db";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

const server = app;
const port = settings.serverPort || 8000;

// Test the database connection before starting the server
connectDB();

server.listen(port, () => {
  console.log(
    `🚀🚀🚀 Aurora's server is running at http://localhost:${port} 🚀🚀🚀`
  );
});
