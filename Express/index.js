// importing express module
const express = require('express'); // returns a function to create an express app
const about = require('./routes/about');
const syllabus = require('./routes/syllabus');
// const bodyParser = require('body-parser');
const sample = require('./routes/sample');


const app = express();
const port = 3000;
const hostname = "127.0.0.1";

app.use('/about', about);
app.use('/syllabus', syllabus);
app.use('/sample', sample);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route definition
app.post('/', (request, reponse) => { 
    /*
        app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root
    */
    console.log(typeof request.body);
    reponse.send(request.body); // send() for response
})


app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
})

// Express does not define any database-related behavior

