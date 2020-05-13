const http = require('http');

const server = http.createServer(function (req, resp) {
  var jsonData = "";
  req.on('data', function (chunk) {
    jsonData += chunk;
  });
  req.on('end', function () {
    console.log(jsonData)
    resp.setHeader('Transfer-Encoding', 'chunked');
    resp.end('ok');
  })
})

server.listen(9001, function () {
  console.log('listening on 9001');
})