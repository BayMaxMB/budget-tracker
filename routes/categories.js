const express = require('express');
const router = express.Router();

const categories = [{
		email: "1810203bm@gmail.com",
		password: "123456789",
		categories: [{
			title: "Salary",
			type: "income"
		}, {
			title: "Transport",
			type: "expense"
		}]
	},
	{
		email: "JasonStatham@bk.ru",
		password: "987654321",
		categories: [{
			title: "Salary",
			type: "income"
		}, {
			title: "Transport",
			type: "expense"
		}]
	},
	{
		email: "GalGadot@gmail.com",
		password: "000777999",
		categories: [{
			title: "Salary",
			type: "income"
		}, {
			title: "Transport",
			type: "expense"
		}]
	}
];

router.get('/', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	let currentUser = {};
	if (categories.some(user => {
			if (user.email === email && user.password === password) {
				currentUser = user;
				return true;
			} else {
				return false;
			}
		})) {
		res.json(currentUser.categories);
	} else {
		res.json({
			error: "Email of Password is incorrect"
		})
	}
});

router.post('/', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	for (let i = 0; i < categories.length; i++) {
		if (categories[i].email === email && categories[i].password === password) {
			categories[i].categories.push(req.body.category);
			res.json({
				message: "Category created"
			})
			break;
		}
	}
	res.json({
		error: "Email of Password is incorrect"
	})
});

module.exports = router;