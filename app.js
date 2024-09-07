const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const helmet = require("helmet");

const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH, PORT } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`;
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
    useNEWUrlParser: true,
    useUnifiedTopology: true,
  },
};
mongoose
  .connect(uri, clientOptions)
  .then((result) => app.listen(PORT))
  .catch((err) => console.log(err));

app.use(helmet());
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.use("/", routes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
