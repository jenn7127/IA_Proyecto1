const express = require('express');
const morgan = require('morgan');
const app = express();

// Configuracion
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rutaa
app.use(require('./routes'));
app.use('/api/jugada', require('./routes/jugada.js'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});