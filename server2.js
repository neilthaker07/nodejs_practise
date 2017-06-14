/**
 * Created by neil on 4/7/17.
 */
var http = require('http');
var app_routing = require('./app_routing');

http.createServer(app_routing.handleRequest).listen(8000);
