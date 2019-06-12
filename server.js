const http = require("http");
const handler = require("./src/handler.js");
require("dotenv").config();

const server = http.createServer(handler);

const getPort = () => {
  return process.env.PORT || 5000;
};

server.listen(getPort(), () => {
  console.log(`Server has started on port ${getPort()}.`);
});
