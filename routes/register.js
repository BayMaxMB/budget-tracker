const express = require('express');
const router = express.Router();
const db = require('../database');

router.post('/', (req, res) => {
	const { email, password, role } = req.body;
	db.register({ email, password, role });

	res.json(db.users);
});

module.exports = router;