var http = require('http');
var PORT = process.env.PORT || 5005

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/plain" });
	response.end("Hello Guys !!!");
}).listen(PORT, function(){
	console.log("Server is listening at port "+ PORT);
});