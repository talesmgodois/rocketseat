const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const port = 8080;
mongoose.connect(
  "mongodb+srv://omni:omni@cluster0-m0tyc.gcp.mongodb.net/admin?retryWrites=true&w=majority",
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
