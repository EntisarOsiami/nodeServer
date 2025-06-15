import { createServer } from 'node:http';


const server = createServer((req, res) => {
  res.writeHead(303, { 
    'Content-Type': 'text/plain',
    'Location': 'https://nodejs.org/docs/latest/api/'
  });
  res.end();
  
  });


server.listen(3400, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3400');
});
