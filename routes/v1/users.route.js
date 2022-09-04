const express = require('express');
const usersController = require('../../controllers/users.controller');
const userCount = require('../../middleware/userCount');
const limiter = require('../../middleware/limiter.js')

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send("tools found");
// })

// router.post("/tools", (req, res) => {
//     res.send("tools added");
// })

router.route('/').get(usersController.getAllUsers)
router.route('/user/save').post(usersController.saveUsers)
    

router.route("/:id").get(userCount, limiter, usersController.getUserDetails).patch(usersController.updateUser).delete(usersController.deleteUser);

module.exports = router;