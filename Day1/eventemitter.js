var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
var fs = require("fs");

var fileName ="./sample1.txt";

emitter.on("start_reading", function(fileName, count){
	fs.readFile(fileName,function(err, data){
		if(err){
			emitter.emit("error", err);

		}
		else
		{
			console.log("Start reading the file !!!!")
			emitter.emit("print_content", data);
		}
	})
});

emitter.on("print_content", function(data){
	console.log("printing the data");
	console.log(data.toString());
	emitter.emit("done", "Done reading the file Successfully !!")
});

emitter.on("error", function(err){
	console.log("There is some error while reading the file");
	console.log(err);
	emitter.emit("done", "Failed reading the file !!")

});

emitter.on("done", function(msg){
	console.log(msg);
})

emitter.emit("start_reading", fileName, count);
