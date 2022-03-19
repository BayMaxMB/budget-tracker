require('dotenv').config();

module.exports = {
	port: process.env.PORT,
	jwt_secret: process.env.JWT_SECRET,
	jwt_expires_in: process.env.JWT_EXPIRES_IN
}