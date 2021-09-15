var http = require('http'); // created a HTTP instance and stored in variable named http

http.createServer(function(request, response) { // a callback function to manage request and response.
    response.end('Hello Deepak Sir...!!!!!!!!!');
}).listen(8021); // .listen to bind the port number to the server