const express = require('express');
const router = require('./routers');
const CONSTANTS = require('./constants');
const app = express();

app.use(express.json());
app.use(express.static(CONSTANTS.PUBLIC_FILE_PATH));
app.use(router);

// const basicErrorHandler = require('./middlewares/errors');
// app.use(basicErrorHandler);

module.exports = app;
