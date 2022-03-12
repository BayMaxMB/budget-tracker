const express = require('express');
const router = express.Router();

const accounts = [{
		email: "1810203bm@gmail.com",
		password: "123456789",
		accounts: [{
			title: "UzCard 1907",
			currency: "UZS",
			ammount: 100000,
			income: [],
			expense: []
		}, {
			title: "VISA 5503",
			currency: "USD",
			ammount: 15,
			income: [],
			expense: []
		}]
	},
	{
		email: "JasonStatham@bk.ru",
		password: "987654321",
		accounts: [{
			title: "Qiwi 9999",
			currency: "RUB",
			ammount: 1000,
			income: [],
			expense: []
		}, {
			title: "MasterCard 7777",
			currency: "USD",
			ammount: 30,
			income: [],
			expense: []
		}]
	},
	{
		email: "GalGadot@gmail.com",
		password: "000777999",
		accounts: [{
			title: "UnionPay 8888",
			currency: "CNY",
			ammount: 500,
			income: [],
			expense: []
		}, {
			title: "Tinkoff 4545",
			currency: "RUB",
			ammount: 300,
			income: [],
			expense: []
		}]
	}
];

router.get('/', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	let currentUser = {};
	if (accounts.some(user => {
			if (user.email === email && user.password === password) {
				currentUser = user;
				return true;
			} else {
				return false;
			}
		})) {
		res.json(currentUser.accounts);
	} else {
		res.json({
			error: "Email of Password is incorrect"
		})
	}
});

router.post('/', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	for (let i = 0; i < accounts.length; i++) {
		if (accounts[i].email === email && accounts[i].password === password) {
			accounts[i].accounts.push(req.body.account);
			res.json({
				message: "Account created"
			})
			break;
		}
	}
	res.json({
		error: "Email of Password is incorrect"
	})
});

module.exports = router;