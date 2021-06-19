const path = require("path");

const express = require("express");

const publicPath = path.join(__dirname, "../public");

const app = express();

const appName = "Node chat app";

const PORT = process.env.PORT || 8080;

app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.send("Welcome to the Node chat app");
});

app.listen(PORT, () => {
  console.log(`${appName} is up on port ${PORT}`);
});
