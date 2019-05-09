var fs = require('fs');
var db = require("../database/classes/DB");
var dir = require("../database/classes/cm_classes/cmdirstring");
var data;
var v=[];
const fileContents = fs.readFileSync('./JSON/CmDirString.json', 'utf8');

class CmDirString_parser {
  constructor() {}


  parse() {
    console.log("CmDirString.parse called");
    data = JSON.parse(fileContents);
    console.log("opcode => ", data.Header.OpCode);
  //console.log(data.DirectionValue[0]);
  var len=data.DirectionString.length;
  //console.log(len);
  for(var i=0;i<len;i++){
   // console.log(data.DirectionValue[i]);
    v = [{
    
      DirStr:data.DirectionString[i],
      DirVal:data.DirectionValue[i],
      GuiId:data.Header.GuiId,
      TimeStamp:"0"
    }];
  }
     

 
       var nd= new dir.CmDirString(v);
       nd.insert();  
   }
}

var current = new CmDirString_parser();
//current.parse();
module.exports = {
  CmDirString_parser
};


