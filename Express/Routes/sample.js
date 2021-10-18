const express = require('express');
const router = express.Router();

router.get('/', (req, resp) => {
    console.log(req.headers);
    resp.json('GET / success');
});

router.delete('/item', (req, resp) => {
    resp.json('Delete / item');
});

module.exports = router;