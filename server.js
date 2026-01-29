const express = require("express");
const path = require("path");
const port = process.env.PORT || 7170;

const app = express();

app.get("/", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
