/*
includes
*/
var express = require('express');
var im = require('imagemagick');
var app = express.createServer();
var util = require('util');
var sys = require('sys');
/*
config settings
*/
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(app.router);
  app.use(express.static(__dirname + '/images'));
});
/*
routes 
*/
app.get('/', function(req, res) {
	res.render('index', { title: 'Image shizz!'});
});

app.get('/resize', function(req, res) {
	
	/*
	im.readMetadata('./donkey.jpg', function(err, metadata){
	  console.log(util.inspect(metadata));
	});
	
	im.identify('./donkey.jpg', function(err, features){
	  if (err) throw err
		res.render('resize', { title: features.format});
//	  res.send(features);
	  // { format: 'JPEG', width: 3904, height: 2622, depth: 8 }
	});
	*/
	im.resize({	srcPath: './donkey.jpg', dstPath: './images/donkey-small.jpg',width: 500}, function(err, stdout, stderr){
		res.render('resize', { title: 'donkey', imagePath: '/donkey-small.jpg'});
		if (err) throw err
		console.log('resized kittens.jpg to fit within 256x256px')
	});
});

app.listen(3000);