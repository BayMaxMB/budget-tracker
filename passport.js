const db = require('./database');

const jwtCallback = (jwt_payload, done) => {
	const user = db.getByEmail(jwt_payload.email);
	if (user) {
		return done(null, user);
	}
	return done(null, false);
}

module.exports = {
	jwtCallback,
}