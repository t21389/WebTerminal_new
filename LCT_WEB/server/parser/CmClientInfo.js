var fs = require('fs');
var db = require("../database/classes/DB");
var clientInfo = require("../database/classes/cm_classes/cmclientintfadapt_info");
var data;
const fileContents = fs.readFileSync('./JSON/CmClientIntfAdaptInfo.json', 'utf8');

class CmClientIntfAdaptInfo {
  constructor() {}


  parse() {
    console.log("CmClientIntfAdaptInfo.parse called");
    data = JSON.parse(fileContents);
    console.log("opcode => ", data.Header.OpCode);
    
    var v = [{
      UniqueCardKey :data.Header.RackId+"-"+data.Header.SubrackId+"-"+data.Header.CardId+"-"+data.Header.CardSubType+"-"+data.Header.CardType,
      ClientName:data.MpnInSubRack[0].ClientInMpn[0].ClientName ,
      ClientType: data.MpnInSubRack[0].ClientInMpn[0].ClientType,
      IntfStatus: data.MpnInSubRack[0].ClientInMpn[0].IntfStatus,
      TributarySetId: data.MpnInSubRack[0].ClientInMpn[0].TributarySetId,
      LinePortNum: data.MpnInSubRack[0].ClientInMpn[0].LinePortNum,
      GuiId: data.Header.GuiId,
      ClientIntfId:data.MpnInSubRack[0].ClientInMpn[0].ClientIntfId ,
      TimeStamp: "0",
    }];

console.log(v[0].UniqueCardKey);
      var nd= new clientInfo.CmClientIntfAdaptInfo(v);
       nd.insert();  
  }
}

var current = new CmClientIntfAdaptInfo();
module.exports = {
  CmClientIntfAdaptInfo
};