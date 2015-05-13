var fs = require('fs');
var jf = require('jsonfile')
var file = 'data.json'
var jsonObj = JSON.parse(fs.readFileSync(file, 'utf8'))
var outputJsonObj = [];

jsonObj.forEach(function (venture, i) {
		venture.investors = [];
		venture.investors.push(venture.group);
		delete venture.group;	

		venture.markets = [];
		venture.markets.push(venture.category);
		delete venture.category;
	})

outputJsonObj = jsonObj;

var outputFile = 'data.json'
jf.writeFile(outputFile, outputJsonObj, function(err){
	console.log(err)
})