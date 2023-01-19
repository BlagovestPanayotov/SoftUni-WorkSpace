const { handleRequest } = require('./main');
const { createServer } = require('http');

const server = createServer(handleRequest);

server.listen(3000);

console.log('Server is running on port 3000...');