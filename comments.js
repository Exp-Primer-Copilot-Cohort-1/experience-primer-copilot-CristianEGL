//Create web server
//Create a web server that's going to send a response of big image (bigger than 3MB) to any client that sends a request to your specified server:port. Use the best way for performance. (Try to solve this in many different ways and inspect the loading time in the browser and send many requests to see the performance differences)

const http = require('http');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'bigImage.jpg');

const server = http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.writeHead(200, {
            'Content-Type': 'image/jpeg'
        });
        res.write(data);
        res.end();
    })
})

server.listen(5000);