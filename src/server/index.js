const expres = require('express')
var routes = require('./routes')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();


var app = expres()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(routes)
var port = process.env.PORT || 3001
app.listen(port, () => { console.log('server started!') });