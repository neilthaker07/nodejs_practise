var express = require('express');
var router = express.Router();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

var spawn   = require('child_process').spawn;


//var multer = require('multer');

router.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
    //res.sendFile(path.join(__dirname, 'views/index.html'));
});

router.post('/signup', function(req, res) {

    // create an incoming form object
    var form = new formidable.IncomingForm();

    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = true;

    // store all uploads in the /uploads directory
    form.uploadDir = path.join(__dirname, '/uploads');

    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
        fs.rename(file.path, path.join(form.uploadDir, file.name));
    });

    // log any errors that occur
    form.on('error', function(err) {
        console.log('An error has occured: \n' + err);
    });

    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
        res.end('success');
    });

    // parse the incoming request containing the form data
    form.parse(req);
    res.render('colorsRequest', { title: 'Express' });
    /*var upload = multer({
			storage: storage
		}).single('userFile')
		upload(req, res, function(err) {
			res.end('File is uploaded')
		});*/
});


router.post('/colors', function(req, res) {

    router.use(express.static(__dirname));

   /* $('select').on('change', function () {
        $.get('/colorsRequest', {color: $(this).val()});
    });*/

    var command = spawn(__dirname + '/calling_script.sh', [req.query.color || '']);
    var output = [];

    command.stdout.on('data', function (chunk) {
        output.push(chunk);
    });

    command.on('close', function (code) {
        if (code === 0)
            res.send(Buffer.concat(output));
        else
            res.send(500); // when the script fails, generate a Server Error HTTP response
    });
    app.listen(3000);
});










/*
app.get('/colorsRequest', function (req, res) {

});
*/

module.exports = router;
