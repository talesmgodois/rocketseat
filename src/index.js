const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const SessionController = require("./controllers/SessionController");
require("dotenv").config();

const app = express();
const port = 8080;
const { DB_USER, DB_PASS } = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0-m0tyc.gcp.mongodb.net/admin?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
