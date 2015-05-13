var fs = require('fs');
var jf = require('jsonfile')
var file = 'data.json'
var jsonObj = JSON.parse(fs.readFileSync(file, 'utf8'))
var outputJsonObj = {};

var markets = [];

// http://stackoverflow.com/questions/11246758/how-to-get-unique-values-in-an-array
Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

// loop through the array of objects in the json and 
// read out all of the values for the market key
jsonObj.forEach(function (venture, i) {
  venture.markets.forEach(function (market, i){ 
    markets.push(market);
  })
})

// get the unique markets for all for of the startups
markets = markets.unique();

// console.log("unique markets");
// console.log(markets);

markets.forEach(function (market, i) { 
  // create a key in outputJsonObj for each market
  // set the value to an empty array
  outputJsonObj[market] = [];
})

// console.log(outputJsonObj);


jsonObj.forEach(function (venture, i) {
  // console.log(i + " " + JSON.stringify(venture));
  venture.markets.forEach(function (marketValue){ 
    // outputJsonObj is not an array, so .forEach doesn't work here
    // console.log(i + " " + marketValue);
    markets.forEach(function (marketKey){
      // console.log(i + " " + marketKey);
      if (marketKey === marketValue){
        //console.log(counter);
        outputJsonObj[marketKey].push(venture);
        // console.log(JSON.stringify(outputJsonObj[marketKey][counter]));
      }
      /*
      else {
        outputJsonObj[marketKey][counter] = "";
        // delete outputJsonObj[marketKey][counter];
      }
      */
    })
  })
})





var outputFile = '003.json'
jf.writeFile(outputFile, outputJsonObj, function(err){
	console.log(err)
})