const express = require('express');
const router = express.Router();
const { auth } = require('../guards');
const User = require('../models/users');

router.get('/', auth, async(req, res) => {
	const user = await User.findOne({ email: req.user.email });
	res.json(user.accounts);
})

router.post('/', auth, async(req, res) => {
	const user = await User.findOne({ email: req.user.email });
	const add = await User.updateOne({ email: req.user.email }, {
		$push: {
			accounts: req.body
		}
	})

	// req.body.ammount = 0;
	// req.body.income = [];
	// req.body.expence = [];
	// req.user.accounts.push(req.body);
	res.json(add);
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