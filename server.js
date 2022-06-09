const express = require('express');
const app = express();

//view egine to render html
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	console.log("I'm here web dev");
	res.render('index', { text: 'World' });
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000); //port 3000
