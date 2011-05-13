var express = require('express');
var app = express.createServer();


app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
});

app.get('/', function(req, res) {
	res.render('index', { title: 'Image shizz!'});
});

app.get('/resize', function(req, res) {
	res.render('index', { title: 'Resize my shizzIMG!'});
});

app.listen(3000);