const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    let url = req.url;
    if ('/' === url) {
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else if ('/styles/main.css' === url) {
        fs.readFile('./styles/main.css', 'utf-8', function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                res.end();
            }
        });
    } else if ('/scripts/api.js' === url) {
        fs.readFile('./scripts/api.js', 'utf-8', function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data);
                res.end();
            }
        });
    }
})

server.listen(8000);