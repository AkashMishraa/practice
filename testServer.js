
// Creating Server in Node

var http = require('http'),
    host = '127.0.0.1',
    path = require('path'),
    fs = require('fs'),
    port = '9000';

    var fileType = {
      ".htm" : "text/html",
      ".css" : "text/css",
      ".js" : "text/javascript",
      ".gif" : "image/gif",
      ".png" : "image/png",
      ".jpg" : "image/jpg"
    }

    var server = http.createServer(function(req, res){
      var filePath = (req.url === '/') ? ('./index.htm') : ('.'+ req.url);
      var contentTyepe = fileType[path.extname(filePath)];
      // if file exist
      fs.exists(filePath, function(file_exists){
        if(file_exists){
          fs.readFile(filePath, function(error, content){
            if(error){
              res.writeHead(500);
              res.end();
            }else{
              res.writeHead(200, {'Content-Type' : contentTyepe});
              res.end(content, 'utf-8');
            }
          });
        }else {
          res.writeHead(404);
          res.end("file not found!");
        }
      })

    }).listen(port, host, function(){
      console.log('Server Running on http://'+ host+ ':' + port);
    })
