
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
const PORT = 3000;

server.use(middlewares);
server.use(router);
server.use(cors());
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});


