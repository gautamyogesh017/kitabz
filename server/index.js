const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
const port = 3000;
const uri = "mongodb://localhost:27017/Bookdatabase";

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const connect = async () => {
  try {
    mongoose.connect(uri);
  } catch (error) {
    console.error(error);
  }
};
connect();

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ISBN: { type: String, required: true },
    Author: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    collection: "books",
  }
);

const Books = mongoose.model("Books", bookSchema);

app.post("/register", (req, res) => {
  console.log(req.body);
  Books.create(req.body);
});
