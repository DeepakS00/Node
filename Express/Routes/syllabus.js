const express = require('express');
const router = express.Router();

router.get('/', (request, response) => { 
    /*
        here ('/') represents '/syllabus'.
    */
    response.send(`<h5 style='color:rgb(138, 64, 35)';>Topics to cover today:-</br>
    <ul style='text-align:centre;'>
    <li>Body Parser</li>
    <li>Environment variables</li>
    <li>Middleware</li>
    <li>EJS</li>
    </ul></h5>`);
})


// Dynamic routing

router.get('/topic/:sn/:name', (req, res) => {
    res.send(`<h5 style='color:rgb(138, 64, 35)';>Topic number ${req.params.sn} is ${req.params.name}</h5>`);
});

module.exports = router;