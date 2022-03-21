const findByEmail = async function(email) {
	return this.findOne({ email }).exec();
}

const byName = function(name) {
	return this.where({ name: new RegExp(name, 'i') });
}

module.exports = {
	findByEmail,
	byName
}