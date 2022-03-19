const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { jwtCallback } = require('./passport');
const { jwt_secret } = require('./config');
const db = require('./database');

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: jwt_secret,
}
passport.use(new JwtStrategy(options, jwtCallback));
const auth = passport.authenticate('jwt', { session: false });

const adminGuard = (req, res, next) => {
	const user = db.getByEmail(req.user.email);

	if (user && user.role.toLowerCase() === 'admin') {
		next();
	} else {
		res.status(403).json({ message: 'Unauthorized' });
	}
}

module.exports = {
	adminGuard,
	auth,
	passport
}