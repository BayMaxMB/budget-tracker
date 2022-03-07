const express = require('express');
const authRouter = require('./routes/auth');
const accountsRouter = require('./routes/accounts');
const categoriesRouter = require('./routes/categories');

const app = express();

app.use(express.json());


app.use('/auth', authRouter);
app.use('/accounts', accountsRouter);
app.use('/categories', categoriesRouter);

app.listen(3000);