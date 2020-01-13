const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const figuresRoutes = require('./routes/public-figure');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rest-api-votes', { 
// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds141631.mlab.com:41631/heroku_1jtbq22b', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( db =>  console.log('db is connected') )
.catch( err => console.err(err));

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require('./routes/index'));
app.use(require('./routes/headeres'));
app.use('/api/figures', figuresRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/user', userRoutes);


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running at port 3000');
});
