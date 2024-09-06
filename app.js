const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const booksRouter = require("./routes/api/books");

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/books", booksRouter);

app.use((request, response) => {
  response.status(404).json({ message: "Not found" });
});

app.use((error, request, response, next) => {
  if (error.status === undefined) {
    error.status = 500;
    error.message = "Server error";
  }
  const { status, message } = error;
  response.status(status).json(message);
});

module.exports = app;
