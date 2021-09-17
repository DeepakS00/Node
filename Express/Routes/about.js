const express = require('express');

const router = express.Router();

router.get('/', (request, response) => { 
    /*
        here ('/') represents '/about'.
    */
    response.send(`<h5 style='color:rgb(138, 64, 35);text-align:center'>***This is a basic application to understand the working of express framework***</h5>`); // send() for response
})

module.exports = router;