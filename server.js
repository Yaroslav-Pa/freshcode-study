const http = require('node:http')
const server = http.createServer(requestListener)

requestListener = (req, res) =>{
  console.log(req);
  console.log(res);
}

const port = 3000;

server.listen(port)