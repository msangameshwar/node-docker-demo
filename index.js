const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const port = process.env.NODE_LOCAL_PORT || 3001;
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.post("/hello", (req, res) => {
  res.send("Hello Post!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
