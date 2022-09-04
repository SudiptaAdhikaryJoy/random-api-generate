const express = require('express');
const usersController = require('../../controllers/users.controller');
const userCount = require('../../middleware/userCount');
const limiter = require('../../middleware/limiter.js')

const router = express.Router();

router.route('/').get(usersController.getAllUsers)
router.route('/save').post(usersController.saveUsers)
    

router.route("/:id").get(userCount, limiter, usersController.getUserDetails)
router.route("/update/:id").patch(usersController.updateUser);
router.route("/delete/:id").delete(usersController.deleteUser);

module.exports = router;