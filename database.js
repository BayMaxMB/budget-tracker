const bcrypt = require('bcrypt');

const users = [{
		email: "1810203bm@gmail.com",
		password: "$2b$10$hZGyElfRjG8v9XPeQ19h8OmVc8vRbYC7a7/2zxmsIQhCYZrZeUAW.",
		credentials: {
			first_name: "Bekzod",
			last_name: "Mukhamedov",
			date_of_birth: "10.11.1999",
			gender: "male",
			country_of_residence: "Uzbekistan",
		},
		role: "admin",
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
		}],
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
		credentials: {
			first_name: "Jason",
			last_name: "Statham",
			date_of_birth: "01.01.1991",
			gender: "male",
			country_of_residence: "UK",
		},
		role: "user",
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
		}],
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
		credentials: {
			first_name: "Gal",
			last_name: "Gadot",
			date_of_birth: "10.10.1988",
			gender: "female",
			country_of_residence: "Georgia",
		},
		role: "user",
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
		}],
		categories: [{
			title: "Salary",
			type: "income"
		}, {
			title: "Transport",
			type: "expense"
		}]
	}
];

function register(user) {
	users.push({
		id: Math.floor(Math.random() * 1000000),
		email: user.email,
		password: bcrypt.hashSync(user.password, 10),
		role: user.role,
		credentials: {
			first_name: user.first_name,
			last_name: user.last_name,
			date_of_birth: user.date_of_birth,
			gender: user.gender,
			country_of_residence: user.country_of_residence
		},
	});
}

function login(email, password) {
	const user = getByEmail(email);
	if (user && bcrypt.compareSync(password, user.password)) {
		return user;
	}
	return null;
}

function getByEmail(email) {
	return users.find(user => user.email === email);
}

module.exports = {
	users,
	register,
	login,
	getByEmail,
}