const http = require('http'); // created a HTTP instance and stored in variable named http

const hostname = "127.0.0.1";
const port = 8021;

http.createServer(function (request, response) { 
    /* 
        a callback function to manage request and response.
    */

    const url = request.url;
    if (url === '/about') {
        response.write('Hello I am Deepak Shukla'); 
        response.end(); 
    }
    else if (url === '/contact') {
        response.write('Mail me at notoriousconor404@mma.com'); 
        response.end(); 
    }
    else {
        response.write('!!!!!Welcome Welcome Welcome!!!!!'); 
        response.end();
    } 
}).listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
}) 

// .listen to bind the port number to the server