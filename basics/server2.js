/**
 * Created by neil on 4/9/17.
 */
var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response) {
    console.log('user profile');
}
function forum(request, response) {
    console.log('user forum');
}

app.use('/profile', profile);

app.use('/forum', forum);

function doFirst(request, response, next) {
    console.log('hhhhhhheeeeeeeeeerrrrrrrreeeeeee');
    next();
}

function doSecond(request, response, next) {
    console.log('22222222222222rrrreeeeeee');
    next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8000);
console.log('server running');