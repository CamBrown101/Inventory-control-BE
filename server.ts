// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8000;
const ENV = process.env.ENV || "development";
import express = require("express");
import bodyParser = require("body-parser");
const app = express();
import morgan = require("morgan");

// PG database client/connection setup
import { Client } from "pg";
const dbParams = require("./lib/db.js");
const client = new Client(dbParams);
client.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//  The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/styles", express.static(`${__dirname}/styles`));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(client));
app.use("/api/widgets", widgetsRoutes(client));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const templateVars = { test: "123" };
  res.render("index", templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
