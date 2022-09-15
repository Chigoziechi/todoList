var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./src/controllers/routes');

var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes.configure(app);

var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);
});
