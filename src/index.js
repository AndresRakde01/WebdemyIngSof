const express = require('express');
const morgan = require('morgan');
const path = require('path');


const { database } = require('./keys.js');

// Intializations
const app = express();

//require('./lib/passport');

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); //muestra la ubicacion


// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); //configurar para recibir .jasons


// Global variables


// Routes
app.use('/api/holamundo',require('./routes/index'));
//app.use(require('./routes/authentication')); //
//app.use('/links', require('./routes/links')); //a donde se redirijiran la rutas


//Static files
app.use(express.static(path.join(__dirname, 'public'))); //direccion rutas *

// Starting
app.listen(app.get('port'), () => {
  console.log('el servidor esta en el puerto', app.get('port'));
});
