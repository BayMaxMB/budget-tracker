const bcrypt = require('bcrypt');

const users = require('./db');

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
		accounts: []
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

function addAccount(user) {
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

module.exports = {
	users,
	register,
	login,
	getByEmail,
}