var fs = require('fs');
var db = require("../database/classes/DB");
var cardstatus = require("../database/classes/cm_classes/cmcurrentcardstatus")
var data
const fileContents = fs.readFileSync('./JSON/CmCurrentCardStatus.json', 'utf8');

class CmCurrentCardStatus_Parser {
  constructor() {}


  parse() {
    console.log("CmCurrentCardStatus.parse called");
    data = JSON.parse(fileContents);
    console.log("opcode => ", data.Header.OpCode);
  
    var v = [{
      UniqueCardKey :data.Header.RackNo+"-"+data.Header.SubrackNo+"-"+data.CurrentState[0].CardId+"-"+data.CurrentState[0].CardSubType+"-"+data.CurrentState[0].CardType+"-"+data.CurrentState[0].CardState,
      RackId: data.Header.RackNo,
      SubrackId: data.Header.SubrackNo,
      SlotId: data.CurrentState[0].CardId,
      CardState: data.CurrentState[0].CardState,
      CardSubType: data.CurrentState[0].CardSubType,
      CardType: data.CurrentState[0].CardType,
      GuiId: data.Header.GuiId,
      TimeStamp: "0",
    }];


       var cd= new cardstatus.CmCurrentCardStatus(v);
       cd.insert();  
  }
}

var current = new CmCurrentCardStatus_Parser();
module.exports = {
  CmCurrentCardStatus_Parser
};