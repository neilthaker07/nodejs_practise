var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
	username: {type: String, required:true},
	password: String
}, {collection: 'user-data'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req,res,next) {
	UserData.find()
		.then(function(doc) {
			res.render('index', {items: doc});
		});
});


router.post('/insert', function(req,res,next){
	var item = {
		username: req.body.username,
		password: req.body.password
	};

	var data = new UserData(item);
	data.save();

	res.redirect('/');
});

router.post('/update', function(req,res,next){

	var id = req.body.id;

	UserData.findById(id, function(err, doc) {
		if(err){
			console.error('error, no entry found');
		}
		doc.username = req.body.username;
		doc.password = req.body.password;
		doc.save();
	});
	res.redirect('/');
});

router.post('/delete', function(req,res,next){

	var id = req.body.id;
	UserData.findByIdAndRemove(id).exec();

	res.redirect('/');

});


module.exports = router;
