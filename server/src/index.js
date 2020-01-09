const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const figuresRoute = require('./routes/public-figure');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rest-api-votes', { 
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
app.use(bodyParser.json());

// Routes
app.use(require('./routes/index'));
app.use('/api/figures', figuresRoute);

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server running at port 3000');
});