import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(303, { 'Content-Type': 'text/html' });
  res.end('index.html');
  
  });
server.listen(3200, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
