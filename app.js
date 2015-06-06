var express = require('express');
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');
var routes = require('./app/server/routes/index.js');
var defaultDir = __dirname + '/app/server/views/layouts/';

// view path setup
app.set('views', path.join(__dirname, 'app/server/views'));
var hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: defaultDir + 'main',
	partialsDir: [__dirname + '']
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, '/app/public')));

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});