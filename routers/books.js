const express = require('express');

const booksRouter = express.Router();
const { validateBookCreateMW, validateBookUpdateMW } = require('../middlewares/book');
const {
  getBooks,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/booksController');

booksRouter.use(express.json());

booksRouter.get('/', getBooks);
booksRouter.get('/:id', getOneBook);
booksRouter.post('/', validateBookCreateMW, createBook);
booksRouter.put('/:id', validateBookUpdateMW, updateBook);
booksRouter.delete('/:id', deleteBook);

module.exports = booksRouter;