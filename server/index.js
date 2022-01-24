const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const imageRoute = require("./routes/images");
var cors = require("cors");
dotenv.config();
app.use(express.json()); //for enabling of sending json objects
const URI = process.env.MONGO_URL;
app.use(cors()); // Use this after the variable declaration
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute); //mounting routes in auth router on /api/auth
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/upload", imageRoute);

app.get("/", (req, res) => {
  res.send("Kenans");
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
