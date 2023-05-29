const express = require("express");
const {
	Register,
} = require("../controllers/users.js");

const router = express.Router();

router.post("/register", Register)

module.exports = router;
