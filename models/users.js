const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		required: true
	},
	credentials: {
		first_name: {
			type: String,
			required: true
		},
		last_name: {
			type: String,
			required: true
		},
		date_of_birth: {
			type: String,
			required: true
		},
		gender: {
			type: String,
			required: true
		},
		country_of_residence: {
			type: String,
			required: true
		},
	},
	accounts: {
		type: [{
			title: String,
			ammount: Number,
			income: {
				type: [{}],
				default: []
			},
			expence: {
				type: [{}],
				default: []
			},
		}],
		default: []
	},
	categories: {
		type: [mongoose.ObjectId],
		ref: 'Categories',
		default: []
	}
	// name: {
	// 	type: String,
	// 	required: true,
	// },
	// age: {
	// 	type: Number,
	// 	min: 18,
	// 	max: 120,
	// 	required: true,
	// 	validate: {
	// 		validator: (v) => v % 2 === 0,
	// 		message: (prop) => `Age (${prop.value}) must be even`,
	// 	}
	// },

	// hobbies: [String],
	// address: {
	// 	street: String,
	// 	city: String,
	// },
	// bestFriend: {
	// 	type: mongoose.ObjectId,
	// 	ref: 'User',
	// },
	// role: {
	// 	type: mongoose.ObjectId,
	// 	ref: 'Role',
	// },
	// edited: {
	// 	type: Number,
	// 	default: 0
	// }
}, {
	timestamps: true
});

userSchema.methods.sayHi = function() {
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

module.exports = mongoose.model('User', userSchema);