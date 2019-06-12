const fs = require("fs");
const url = require("url");
const weatherForecast = require("./weather.js");

const handler = (request, response) => {
  const endpoint = request.url;
  if (endpoint === "/") {
    sendResponse(response, "index.html", "text/html");
  } else if (endpoint.startsWith("/weather")) {
    const location = url.parse(endpoint, true).query.location;
    sendWeatherResponse(location, response);
  } else if (endpoint.includes(".css")) {
    sendResponse(response, endpoint, "text/css");
  } else {
    sendResponse(response, endpoint, "application/javascript");
  }
};

const sendWeatherResponse = (location, response) => {
  weatherForecast(location).then(weather => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(weather);
    response.end();
  });
};

const sendResponse = (response, fileName, contentType) => {
  fs.readFile(__dirname + "/../public/" + fileName, function(error, file) {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write("Resource not found");
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(file);
    }
  });
};

module.exports = handler;
