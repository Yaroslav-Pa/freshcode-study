let books = [
  {
    id: 0,
    name: '0',
    author: '0',
    description:
      '0110010001100101011100110110001101110010011010010111000001110100011010010110111101101110',
    numberOfPages: 1000110,
    cost: 100,
    inStock: true,
  },
  {
    id: 1,
    name: '01',
    author: '01',
    description: 'none',
    numberOfPages: 1,
    cost: 20,
    inStock: false,
  },
];

class Book {
  static findedBook(neededId) {
    return books.find(({ id }) => id === +neededId);
  }

  static async getAll() {
    return books;
  }

  static async getOne(id) {
    return Book.findedBook(id);
  }

  static async create({
    name,
    author,
    description,
    numberOfPages,
    cost,
    inStock,
  }) {
    const newBook = {
      id: Date.now(),
      name,
      author,
      description,
      numberOfPages,
      cost,
      inStock,
    };
    books.push(newBook);
    return books;
  }

  static async update(id, bookData) {
    books = books.map((book) => {
      if (book.id !== Book.findedBook(id).id) {
        return book;
      }
      return { ...book, ...bookData };
    });
    return Book.findedBook(id);
  }

  static async delete(passedId) {
    let bookToDelete = Book.findedBook(passedId);
    books = books.filter(({ id }) => id !== Book.findedBook(passedId).id);
    return bookToDelete;
  }
}

module.exports = Book;
