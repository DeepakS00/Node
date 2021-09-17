// importing express module
const express = require('express'); // returns a function to create an express app
const about = require('./Routes/about');
const syllabus = require('./Routes/syllabus');

const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use('/about', about);
app.use('/syllabus', syllabus);

// route definition
app.get('/', (request, reponse) => { 
    /*
        app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root
    */
    reponse.send("<h2 style='color: rgb(138, 64, 35); text-align: center;'>!!!!!Welcome Welcome Welcome!!!!!</br>😇</h2>"); // send() for response
})


app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

// Express does not define any database-related behavior
