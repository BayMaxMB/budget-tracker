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
		password: "$2b$10$XS4xsSFSosUtJpQ2DiSGmuejq6..1YfkxjrIkn4vQsgeTgfq/n0yy",
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
		password: "$2b$10$AjIL63hjSOzZGzFMwppAKuta/CWenf6MCMLP1b6PiZtoaNSWMPeh2", // 000777999
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

module.exports = users;