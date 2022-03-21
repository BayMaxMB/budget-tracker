const db = require('./database');
const User = require('./models/users');

const jwtCallback = async(jwt_payload, done) => {
	const user = await User.findOne({ email: jwt_payload.email });
	if (user) {
		return done(null, user);
	}
	return done(null, false);
}

module.exports = {
	jwtCallback,
}