const express = require('express');
const router = express.Router();
const { auth } = require('../guards');
const User = require('../models/users');

router.get('/', auth, async(req, res) => {
	const user = await User.findByEmail(req.user.email);
	res.json(user.accounts);
})

router.post('/', auth, async(req, res) => {
	const user = await User.findByEmail(req.user.email);
	const add = await user.updateOne({
		$push: {
			accounts: req.body
		}
	})

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