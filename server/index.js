const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");

const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

dotenv.config();
app.use(express.json()); //for enabling of sending json objects
const URI = process.env.MONGO_URL;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// it takes the file and saves inside images file, and filename is the name we are providing on the client side
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images"); // second parameter is destination
  },
  filename: (req, file, callback) => {
    callback(null, "biggie.jpg");
  },
});

const upload = multer({ storage: storage });
//upload.single("name"), name must be the same as the key i.e. the key of the input name in form
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute); //mounting routes in auth router on /api/auth
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

app.get("/", (req, res) => {
  res.send("Kenans");
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
