const express = require('express');
const router = express.Router();

const users = [{
		email: "1810203bm@gmail.com",
		password: "123456789",
		credentials: {
			first_name: "Bekzod",
			last_name: "Mukhamedov",
			date_of_birth: "10.11.1999",
			gender: "male",
			country_of_residence: "Uzbekistan",
		},
		role: "admin"
	},
	{
		email: "JasonStatham@bk.ru",
		password: "987654321",
		credentials: {
			first_name: "Jason",
			last_name: "Statham",
			date_of_birth: "01.01.1991",
			gender: "male",
			country_of_residence: "UK",
		},
		role: "user"
	},
	{
		email: "GalGadot@gmail.com",
		password: "000777999",
		credentials: {
			first_name: "Gal",
			last_name: "Gadot",
			date_of_birth: "10.10.1988",
			gender: "female",
			country_of_residence: "Georgia",
		},
		role: "user"
	}
];

router.get('/', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	let currentUser = {};
	if (users.some(user => {
			if (user.email === email && user.password === password) {
				currentUser = user;
				return true;
			} else {
				return false;
			}
		})) {
		res.json(currentUser);
	} else {
		res.json({
			error: "Email of Password is incorrect"
		})
	}
});

router.post('/', (req, res) => {
	users.push(req.body);
	res.json({ status: "user created" })
});

module.exports = router;