var fs = require('fs');
var db = require("../database/classes/DB");
var expected = require("../database/classes/cm_classes/cmexpectedconfig")
var data;
const fileContents = fs.readFileSync('./JSON/CmExpectedConfig.json', 'utf8');

class CmExpectedConfig_Parser {
  constructor() {}


  parse() {
    console.log("CmExpectedConfig.parse called");
    data = JSON.parse(fileContents);
    console.log("opcode => ", data.Header.OpCode);

    var v = [{
      NeType:data.NeType,
      CardType:data.ExpectedConfig[0].CardType,
      ExpectedFlag:data.ExpectedConfig[0].ExpectedFlag
    }];


      var nd= new expected.CmExpectedConfig(v);
       nd.insert();  
  }
}

var current = new CmExpectedConfig_Parser();
//current.parse();
module.exports = {
  CmExpectedConfig_Parser
};