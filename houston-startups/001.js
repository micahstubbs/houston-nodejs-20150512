// var fs = require('fs');
var jf = require('jsonfile')
// var file = 'data.json'
// var jsonObj = JSON.parse(fs.readFileSync(file, 'utf8'))
var outputJsonObj = [];

var company = {
    "url": "http://www.adientmedical.com",
    "size": "medium",
    "name": "Adient Medical",
    "bio": "Adient’s mission is the development of absorbable medical devices with the premise that implants should be safe and efficacious during their useful lifetime, and then simply vanish without intervention, alleviating costly removal procedures and downstream complications. The company, founded in 2012, is leading the development of a totally absorbable vascular filter for the prevention of pulmonary embolism, the nation’s 3rd largest killer claiming the lives of 100,000 to 300,000 Americans each Year - more than breast cancer, AIDS, and traffic fatalities combined. In collaboration with its partners including the University of Texas M. D. Anderson Cancer Center, Adient is developing novel polymers with exceptional strength and imaging characteristics for the demands of implantable absorbable medical devices. Overall, a game changing medical device platform is emerging with the potential of saving lives with minimal adverse events since the absorbable devices vanish from the body following intended use.",
    "year": 2012,
    "investors": [
      "TMCx"
    ],
    "markets": [
      "biomedical"
    ]
  }

company.markets.push("genetics");

outputJsonObj = company;

var outputFile = '001.json'
jf.writeFile(outputFile, outputJsonObj, function(err){
	console.log(err)
})