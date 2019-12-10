const http = require('http');
const url = require('url');
const port = 80;
const requestHandler = (request, response) => {
  const url_parts = url.parse(request.url, true);
  response.end(`Hello ${url_parts.query.name}`);
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
})