var fs = require('fs');
var db = require("../database/classes/DB");
var wavelength= require("../database/classes/cm_classes/cmwavelength_details");
var data
const fileContents = fs.readFileSync('./JSON/CmWavelengthDetail.json', 'utf8');

class CmWavelengthDetail {
  constructor() {}


  parse() {
    console.log("CmWavelengthDetail.parse called");
    data = JSON.parse(fileContents);
    var v = [{
      WavelengthVal:data.WavelengthValue,
      Frequency:data.Frequency,
      WavelengthNum:"1"
    }];


     var nd= new wavelength.CmWavelengthDetail(v);
       nd.insert();  
  }
}

var current = new CmWavelengthDetail();
module.exports = {
  CmWavelengthDetail
};