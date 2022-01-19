const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json()); //for sending json objects

dotenv.config();
const URI = process.env.MONGO_URL;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/server/auth", authRoute); // indicates path for posting

app.get("/", (req, res) => {
  res.send("Kenans");
});

app.listen("5000", () => {
  console.log("listening on port 5000");
});
