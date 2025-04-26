const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(
  session({
    secret: "secret@123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
    },
  })
);

app.get("/", (req, res) => {
  res.send("Welcome to ApadeStock API");
});

mongoose
  .connect("mongodb://localhost:27017/ApadeStock", {})
  .then(() => {
    console.log("connected to  mongodb database");
  })
  .catch((err) => console.log(err));
app.use("/products", require("./src/routes/products"));
app.use("/auth", require("./src/routes/auth"));
app.use("/users", require("./src/routes/users"));
app.use("/stockin", require("./src/routes/stockIn"));
app.use("/stock", require("./src/routes/stock"));

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
