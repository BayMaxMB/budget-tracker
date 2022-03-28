const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/', async(req, res) => {
	try {
		const newUser = await User.register(req.body);
		res.status(200).json(newUser);
	} catch (err) {
		console.log(err)
		res.status(400).json(err);
	}
});

module.exports = router;