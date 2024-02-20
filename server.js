const handleErrorS = require('./middlewares/errors/simple') 
const express = require('express');
const booksRouter = require('./routers/books');
const app = express();


app.use('/books', booksRouter);

app.use(handleErrorS);

const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});