const express = require('express');
const router = express.Router();
const { auth, adminGuard } = require('../guards');
const User = require('../models/users');

router.get('/', auth, adminGuard, async(req, res) => {
	const users = await User.find({});
	res.send(users);
});

module.exports = router;