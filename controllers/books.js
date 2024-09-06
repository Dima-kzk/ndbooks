const books = require("../models/books");
const { HttpError, ctrlWrraper } = require("../helpers");

const getAll = async (request, response) => {
  const result = await books.getAll();
  if (!result) throw HttpError(404, "Not found");
  response.json(result);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const result = await books.getById(id);
  if (!result) throw HttpError(404, "Not found");
  response.json(result);
};

const add = async (request, response) => {
  const result = await books.add(request.body);
  response.status(201).json(result);
};

const updateById = async (request, response) => {
  const { id } = request.params;
  const result = await books.updateById(id, request.body);
  if (!result) throw HttpError(404, "Not found");
  response.json(result);
};

const deleteById = async (request, response) => {
  const { id } = request.params;
  const result = await books.deleteById(id);
  if (!result) throw HttpError(404, "Not found");
  response.status(204).send();
};

module.exports = {
  getAll: ctrlWrraper(getAll),
  getById: ctrlWrraper(getById),
  add: ctrlWrraper(add),
  updateById: ctrlWrraper(updateById),
  deleteById: ctrlWrraper(deleteById),
};
