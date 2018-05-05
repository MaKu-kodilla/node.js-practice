
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('index.html', function (err, data) {
            if(err) throw err;
                response.statusCode = 200;
                response.end(data);
        })
    } else {
        response.setHeader("Content-Type", "image/jpg");
        fs.readFile('closed-img.jpg', function (err, data) {
            if (err) throw err;
                response.statusCode = 404;
                response.end(data);
        })
    }
});

server.listen(9000);