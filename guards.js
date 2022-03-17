const db = require('./database');

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
}