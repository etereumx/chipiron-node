/**
 * http://usejsdoc.org/
 */
var http = require('http');
var urlSource= "http://www.salamardigras.com/newmardi/category/conciertos/";
var request = http.get(urlSource, function(res){
	res.setEncoding('utf8');
	res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
});

request.on('error', function(e){
	console.log("error:"+e);
});