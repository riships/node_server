var http = require('http'); // 1 - Import Node.js core module
var fs = require('fs')

var server = http.createServer(function (req, res) {   // 2 - creating server

    //handle incomming requests here..
    if (req.url == '/data') { //check the URL of the current request

        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' });

        // set response content

        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    }

    // }
    // else if (req.url == "/student") {

    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<html><body><p>This is student Page.</p></body></html>');
    //     res.end();

    // }
    // else if (req.url == "/admin") {

    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write('<html><body><p>This is admin Page.</p></body></html>');
    //     res.end();

    // }
    else if (req.url == '/') { //check the URL of the current request
        fs.readFile('data/db.json', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //3 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')
