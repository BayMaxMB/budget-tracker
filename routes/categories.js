const express = require('express');
const router = express.Router();
const { auth } = require('../guards');

router.get('/', auth, (req, res) => {
	res.json(req.user.categories);
})

router.post('/', auth, (req, res) => {
	req.user.categories.push(req.body);
	res.json(req.user.categories);
});
router.put('/', auth, (req, res) => {
	for (let i = 0; i < req.user.categories.length; i++) {
		if (req.user.categories[i].title === req.body.title) {
			req.user.categories[i].title = req.body.newTitle;
			break;
		}
	}
	res.json(req.user.categories);
});

module.exports = router;