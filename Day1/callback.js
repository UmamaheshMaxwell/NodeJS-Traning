var fs = require('fs');

console.log("Started reading the file !!!");

 fs.readFile("sample.txt", function(err, data){
	if(err){
		throw err;
	}
	console.log(data.toString());

});

console.log("Finished reading file");
