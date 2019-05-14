var fs = require("fs");
var db = require("../database/classes/DB");
var nodeDetail = require("../database/classes/node_details");
var data;
// const fileContents = fs.readFileSync('./JSON/systeminfo.json', 'utf8');
module.exports.NodeInfo_Parser = class NodeInfo_Parser {
  constructor() {}

  async parse(fileContents) {
    return new Promise(async (resolve, reject) => {
      console.log("NodeInfo.parse called");
      data = fileContents;
      //console.log(data.Header)
      // console.log(data);
      console.log("opcode => ", data.Header.OpCode);

      var v = [
        {
          CtrlVersion: data.CtrlVersion,
          DataVersion: data.DataVersion,
          GuiId: data.Header.GuiId,
          Degree: data.Degree,
          Direction: data.Direction,
          Gateway: data.Gateway,
          GneAddrType: data.GneAddrType,
          GneFlag: data.GneFlag,
          GneGateWay: data.GneGateWay,
          GneIp: data.GneIp,
          GneIpPrefixLen: data.GneIpPrefixLen,
          GneIpv6: data.GneIpv6,
          IlaType: data.IlaType,
          LctIp: data.LctIp,
          McpIp: data.McpIp,
          NeType: data.NeType,
          OpticalReach: data.OpticalReach,
          PotpType: data.PotpType,
          RouterAddrType: data.RouterAddrType,
          RouterId: data.RouterId,
          RouterIpPrefixLen: data.RouterIpPrefixLen,
          SAPI: data.SAPI,
          SiteName: data.SiteName,
          StationName: data.StationName,
          NetworkId: data.NetworkId,
          NodeId: data.NeId,
          Systemcapacity: data.Systemcapacity,
          TimeStamp: data.TimeStamp,
          Topology: data.Topology,
          Vlan: data.Vlan,
          MacAddress: data.MacAddress,
          OrderOfOtm: data.OrderOfOtm,
          Date: data.Header.Date,
          Month: data.Date.Month,
          Year: data.Date.Year,
          Hour: data.Date.Hour,
          Minute: data.Date.Minute,
          Second: data.Date.Seconds
        }
      ];

      var nd = new nodeDetail.Node_details(v);
      let d = [{ NetworkId: 2, NodeId: 2 }];
      await nd.delete(d);
      let rowsInserted = await nd.insert();
      resolve({
        message: "System Info received successfully",
        result: "success"
      });
    });
  }
};

// var detail = new NodeInfo_Parser(this.v);

// module.exports = {
//   NodeInfo_Parser
// };
