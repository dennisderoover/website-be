const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// Import Routes
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");

dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => console.log("Connected to DB"));

// Middleware
app.use(express.json());
app.use(
  cors({
    exposedHeaders: ["Token"]
  })
);
// Route Middelwares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(process.env.PORT, () => console.log("Server Up and Running"));
