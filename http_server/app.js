const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write('<h1>Hello node.js!</h1>');
  res.end('<h3>This is to create a server that hosts a http site');
})

server.listen(port, () => console.log(`The server is listening from port ${port}`));