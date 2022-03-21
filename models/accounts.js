const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	currency: {
		type: String,
		required: true
	},
	ammount: {
		type: Number,
		default: 0
	},
	income: {
		type: [mongoose.ObjectId],
		ref: 'Income',
		default: []
	},
	expence: {
		type: [mongoose.ObjectId],
		ref: 'Expence',
		default: []
	}
}, {
	timestamps: true
});

userSchema.methods.edit = function(title, currency) {
	console.log(`Hi, I'm ${this.name}`);
}

userSchema.statics.register = async function(user) {
	const temp = {
		email: user.email,
		password: bcrypt.hashSync(user.password, 10),
		role: user.role,
		credentials: {
			first_name: user.credentials.first_name,
			last_name: user.credentials.last_name,
			date_of_birth: user.credentials.date_of_birth,
			gender: user.credentials.gender,
			country_of_residence: user.credentials.country_of_residence
		}
	}
	const newUser = await this.create(temp);
	return newUser;
}

userSchema.statics.login = async function(email, password) {
	const user = await this.findOne({ email });
	console.log(user)
	if (user && bcrypt.compareSync(password, user.password)) {
		return user;
	}
	return null;
}

userSchema.statics.findByEmail = async function(email) {
	return this.where({ email: new RegExp(email, 'i') }).exec();
}

userSchema.query.byName = function(name) {
	return this.where({ name: new RegExp(name, 'i') });
}

// userSchema.virtual('namedEmail')
// 	.get(function() {
// 		return `${this.name} <${this.email}>`;
// 	});

// userSchema.pre('save', function(next) {
// 	this.edited++;
// 	next();
// })

// userSchema.post('save', function(doc) {
// 	console.log(`${doc.name} has been saved`);
// });

module.exports = mongoose.model('Account', accountSchema);