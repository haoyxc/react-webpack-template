const express = require("express");
const app = express();
const dbRoutes = require("./routes/databaseAccess.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.connect(process.env.MONGODB_URI);

// This line makes the build folder publicly available.
app.use(bodyParser.json());
app.use("/db", dbRoutes);
app.use(express.static("build"));

app.listen(3000, () => {
  console.log("Server for React Todo App listening on port 3000!");
});
