const { port } = require('./config');
const app = require('./app');
const mongoose = require('mongoose');

const mongoUrl = `${process.env.MONGODB_URI}${process.env.DB_NAME}`;
mongoose.connect(mongoUrl);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
})