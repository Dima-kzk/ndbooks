const express = require("express");

const books = require("./models/books");

const booksRouter = require("./routes/api/books");

const app = express();

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
