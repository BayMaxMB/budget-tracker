const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../database');
const { jwt_secret, jwt_expires_in } = require('../config');

router.post('/', (req, res) => {
	const user = db.login(req.body.email, req.body.password);

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
		});
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
});

module.exports = router;