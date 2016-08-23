var http = require('http');

var PORT = process.env.PORT || 3000;

http.createServer(function(request, response){
	response.writeHeader(200, {"Content-Type" :"text/plain"});
	response.end("Hello Boston !!!");

}).listen(PORT, function(){
	console.log("Server listening at port" + PORT)
});