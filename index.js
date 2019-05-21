const express = require("express");
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
// Route Middelwares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

app.listen(8080, () => console.log("Server Up and Running"));
