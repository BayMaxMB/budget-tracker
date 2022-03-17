const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const db = require('../database');
const { adminGuard } = require('../guards');
const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { jwtCallback } = require('../passport');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: process.env.JWT_SECRET,
}
passport.use(new JwtStrategy(options, jwtCallback));
const auth = passport.authenticate('jwt', { session: false });

router.post('/register', (req, res) => {
	const { email, password, role } = req.body;
	db.register({ email, password, role });

	res.json(db.users);
});

router.post('/login', (req, res) => {
	const user = db.login(req.body.email, req.body.password);

	if (user) {

		const payload = {
			id: user.id,
			email: user.email,
			role: user.role,
		}

		const token = jwt.sign(
			payload,
			process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }
		);

		res.status(200).json({
			id: user.id,
			email: user.email,
			role: user.role,
			token: `Bearer ${token}`,
		});
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
});


router.get('/users', auth, adminGuard, (req, res) => {
	res.json(db.users);
})

router.get('/posts', auth, (req, res) => {
	res.json(db.users);
})


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

module.exports = {
	router,
	passport
};