const express = require('express');
const router = express.Router();
const db = require('../database');
const { auth } = require('../guards');

router.get('/', auth, (req, res) => {
	res.json(db.users);
})

module.exports = router;