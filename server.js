const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = "mongodb://localhost:27017/ProjectTeam";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongo is running..."))
  .catch((err) => console.log(err));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/api/auth/", require("./auth"));

app.listen(process.env.PORT || 5000, console.log("server is running..."));
