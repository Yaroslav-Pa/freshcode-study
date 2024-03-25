const http = require('http');
const app = require('./app')
const server = http.createServer(app);

const PORT = 5000;
const HOST = 'localhost'

server.listen(PORT,HOST, () => {
  console.log(`Server started on port ${HOST}:${PORT}`);
});
