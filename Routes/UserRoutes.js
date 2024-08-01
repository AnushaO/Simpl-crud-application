const express = require("express");
const router = express.Router();

// Import Controller
const UserController = require("../Controllers/UserController"); // Corrected the file name

router.get("/", UserController.getAllUsers);

module.exports = router;
