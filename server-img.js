import { createServer } from 'node:http';
import fs from 'node:fs';

const data = fs.readFileSync('node.webp')

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'image/webp' });
  res.end(data);
  
  });


server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
