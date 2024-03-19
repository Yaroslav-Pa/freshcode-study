const express = require('express');
const router = require('./routers');
const basicErrorHandler = require('./middlewares/errors');
const config = require('./configs/server.json');

const app = express();

app.use(express.json());
app.use(router);

app.use(basicErrorHandler);

const PORT = config.PORT;
const HOST = config.HOST;

app.listen(PORT, HOST, () => {
  console.log(`Server started on port ${HOST}:${PORT}`);
});
