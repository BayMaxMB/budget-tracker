const express = require('express');
const router = express.Router();
const db = require('../database');
const { auth, adminGuard } = require('../guards');

router.get('/', auth, adminGuard, (req, res) => {
	res.json(db.users);
})

module.exports = router;