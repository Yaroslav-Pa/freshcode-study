const express = require('express');
const basicErrorHandler = require('./middlewares/errors');
const router = require('./routers');
const app = express();

app.use(express.json());
app.use(router);

app.use(basicErrorHandler);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
