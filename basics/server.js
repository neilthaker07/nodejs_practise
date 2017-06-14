/**
 * Created by neil on 4/9/17.
 */
var http = require('http');
var fs = require('fs');


// 404 res
function  send404Response(response) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('Error 404 Page not found');
    response.end();

}

// handle req
function onRequest(request, response)
{
    /*console.log('req '+ request.url);
    response.writeHead(200, {'Context-Type': 'text/plain'});
    response.write('here is res');
    response.end();*/

    if( request.method == 'GET' && request.url == '/')
    {
        response.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./index.html').pipe(response);
    }
    else {
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8000);
console.log('server is up.............');

