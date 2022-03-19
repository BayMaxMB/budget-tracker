const { port } = require('./config');
const express = require('express');
const cors = require('cors');
const { passport } = require('./guards');

const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const accountsRouter = require('./routes/accounts');
const categoriesRouter = require('./routes/categories');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/accounts', accountsRouter);
app.use('/categories', categoriesRouter);
app.use(passport.initialize());

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
})