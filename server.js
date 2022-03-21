const { port } = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { passport } = require('./guards');

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const accountsRouter = require('./routes/accounts');
const categoriesRouter = require('./routes/categories');

const mongoUrl = `${process.env.MONGODB_URI}${process.env.DB_NAME}`;
mongoose.connect(mongoUrl);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/accounts', accountsRouter);
app.use('/categories', categoriesRouter);
app.use(passport.initialize());

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
})