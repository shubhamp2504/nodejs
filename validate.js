var validate = require('validator');
var http = require('http');

 var checkmail = validate.isEmail("12shubham@gmail.com");

 var checkURL = validate.isURL("google.com");




http.createServer(function (req, res){
    res.writeHead(200, {'content-Type': 'text/http'});


    res.write("<h1>Email ID is valid or not "+checkmail+ "</h1>");
 res.write("URL ID is valid or not "+checkURL);


    res.end();
}).listen(8000);

console.lo