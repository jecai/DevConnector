const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));

// Use routes
const users = require("./routes/api/users");
app.use("/api/users", users);

const profiles = require("./routes/api/profile");
app.use("/api/profiles", profiles);

const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
