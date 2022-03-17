require('dotenv').config();
const PORT = process.env.PORT;

const express = require('express');
const cors = require('cors');
const passport = require('./routes/auth').passport

const authRouter = require('./routes/auth').router;
const accountsRouter = require('./routes/accounts');
const categoriesRouter = require('./routes/categories');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use('/auth', authRouter);
app.use('/accounts', accountsRouter);
app.use('/categories', categoriesRouter);
app.use(passport.initialize());

app.listen(PORT, () => {
	console.log(`Server is listening on http://localhost:${PORT}`);
})