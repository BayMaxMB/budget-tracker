const express = require('express');
const router = express.Router();
const db = require('../database');
const { auth } = require('../guards');

router.get('/', auth, (req, res) => {
	res.json(req.user.accounts);
})

router.post('/', auth, (req, res) => {
	req.body.ammount = 0;
	req.body.income = [];
	req.body.expence = [];
	req.user.accounts.push(req.body);
	res.json(req.user.accounts);
});
router.put('/', auth, (req, res) => {
	for (let i = 0; i < req.user.accounts.length; i++) {
		if (req.user.accounts[i].title === req.body.title) {
			req.user.accounts[i].title = req.body.newTitle;
			req.user.accounts[i].currency = req.body.currency;
			break;
		}
	}
	res.json(req.user.accounts);
});

module.exports = router;