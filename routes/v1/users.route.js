const express = require('express');

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("tools found");
// })

// router.post("/tools", (req, res) => {
//     res.send("tools added");
// })

router.route('/').get((req, res) => {
    res.send("tools found with id");
})
    .post((req, res) => {
        res.send("tools added");
    })

module.exports = router;