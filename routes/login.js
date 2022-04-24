const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../database');
const { jwt_secret, jwt_expires_in } = require('../config');
const User = require('../models/users');

router.post('/', async(req, res) => {
	const user = await User.login(req.body.email, req.body.password);

	if (user) {
		const payload = {
			id: user.id,
			email: user.email,
			role: user.role,
		}
		const token = jwt.sign(
			payload,
			jwt_secret, { expiresIn: jwt_expires_in }
		);

		res.status(200).json({
			id: user.id,
			email: user.email,
			role: user.role,
			token: `Bearer ${token}`,
			expiresIn: 1 * 60 * 60 * 1000,
		});
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
});

module.exports = router;