const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const app = express();

// Static Files
app.use(express.static("public"));

// Set Template Engine
app.use(expressLayouts);
app.set("layout", "./layouts/master");
app.set("view engine", "ejs");

//Navigation
app.get("/", function (req, res) {
  res.render("pages/index", { title: "Home Page" });
});

app.get("/about", function (req, res) {
  res.render("pages/about", { title: "Home Page" });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

// Listen on Port 3000
app.listen(3000);
console.log("Server is running");
