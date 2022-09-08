let express = require('express');
let bodyParser = require("body-parser");

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static('/home/oleksandr/eclipse-photon/lesson-09'));
//server.use(express.static(__dirname));
server.use(jsonParser);

server.get('/', function(request, response){
	console.log("Start page is running");
	response.send('<h1>Welcome to the lesson regarding AJAX</h1>');	
});

server.get('/userGet', function(request,response){
	console.log(request.query);
	response.send('You have successfully used GET method: '+ JSON.stringify(request.query));
});

server.post('/userPost', function(request, response){
	console.log(request.body);
	response.send('You have successfully used POST method: '+ JSON.stringify(request.body));
});


// server for Home Work lesson - 09

server.get('/formGet', function (request, response) {
	console.log("Form receipted by GET:");
	console.log(request.query);
    let obj = request.query;
    console.log(obj.userName += ".ValidatedByGET");
    console.log(obj.userSurname += ".ValidatedByGET");
    console.log(obj.userAge += ".ValidatedByGET");
    console.log(obj.userAddress += ".ValidatedByGET");
	response.send(JSON.stringify(obj));
//	response.send(JSON.stringify(request.query));
});

server.post('/formPost', function (request, response) {
    console.log("Form receipted by POST:");
	console.log(request.body);

    var obj = request.body;
    console.log(obj.userName += ".ValidatedByPOST");
    console.log(obj.userSurname += ".ValidatedByPOST");
    console.log(obj.userAge += ".ValidatedByPOST");
    console.log(obj.userAddress += ".ValidatedByPOST");
    response.send(JSON.stringify(obj));
});

server.listen(3000);




