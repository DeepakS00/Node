var http = require('http'); // created a HTTP instance and stored in variable named http

http.createServer(function(request, response) {
    response.end('Hello Deepak Sir...!!!!!!!!!');
}).listen(8021);