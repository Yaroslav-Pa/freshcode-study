const Book = require('../models/books')

module.exports.getBooks = async (req, response) => {
  response.send(await Book.getAll());
};
module.exports.getOneBook = async (req, res) => {
  res.send(await Book.getOne(req.params.id));
};
module.exports.createBook = async (req, res) => {
  res.send(await Book.create(req.book));
};
module.exports.updateBook = async (req, res) => {
  res.send(await Book.update(req.params.id, req.body));
};
module.exports.deleteBook = async (req, res) => {
  res.send(await Book.delete(req.params.id));
};