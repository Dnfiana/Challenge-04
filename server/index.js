const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 9100;

http.createServer((req, res) => {
    switch (req.url){
        case "/":
            req.url = "home.html";
            break;
        case "/cars":
            req.url = "searchcar.html";
            break;
    }

    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
        res.writeHead(200);
        res.end(data);
    });

})
.listen(port, 'localhost', () => {
    console.log("Server ku Wes Iso Gaes, KLik http://localhost:%d", port);
});

