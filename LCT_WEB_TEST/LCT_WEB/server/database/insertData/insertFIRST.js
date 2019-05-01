var sql = require("../DBConnection");

async function insert_Interface(values) {
    return new Promise(async (resolve, reject) => {
      let insertquery = `INSERT INTO Interface(InterfaceId,InterfaceName,WsIp,WsSubnetMask) VALUES ?`;
      sql.con.query(insertquery, [[values]], async function (err, results) {
        if (err) {
          console.log(err.message);
          reject(err);
        }
        else {
          console.log("result", results.affectedRows);
          resolve(results.affectedRows);
        }
      });
    })
  }

  async function insert_Order_details(values) {
    return new Promise(async (resolve, reject) => {
      let insertquery = `INSERT INTO Order_details(OrderId,ConnType,OrderType,InterfaceId,UserId,RemoteIp,State,SDNReady) VALUES ?`;
      sql.con.query(insertquery, [[values]], async function (err, results) {
        if (err) {
          console.log(err.message);
          reject(err);
        }
        else {
          console.log("result", results.affectedRows);
          resolve(results.affectedRows);
        }
      });
    })
  }

  async function insert_Network_details(values) {
    return new Promise(async (resolve, reject) => {
      let insertquery = `INSERT INTO Network_details(NetworkId,NetworkName,OrderId) VALUES ?`;
      sql.con.query(insertquery, [[values]], async function (err, results) {
        if (err) {
          console.log(err.message);
          reject(err);
        }
        else {
          console.log("result", results.affectedRows);
          resolve(results.affectedRows);
        }
      });
    })
  }

  async function insert_Node_details(values) {
    return new Promise(async (resolve, reject) => {
      let insertquery = `INSERT INTO Node_details( NetworkId,NodeId,NeType,Direction,StationName,SiteName,CtrlVersion,DataVersion,Degree,GneAddrType,GneFlag,VlanTag,EmsSubnet,Gateway,GneGateway,GneIp,GneIpPrefixLen,GneIpV6,GuiId,IlaType,LctIp,McpIp,OpticalReach,PotpType,RouterAddrType,RouterId,RouterIpPrefixLen,SAPI,SubNetworkId,SystemCapacity,TimeStamp,Topology,Vlan ) VALUES ?`;
      sql.con.query(insertquery, [[values]], async function (err, results) {
        if (err) {
          console.log(err.message);
          reject(err);
        }
        else {
          console.log("result", results.affectedRows);
          resolve(results.affectedRows);
        }
      });
    })
  }

module.exports={
    insert_Interface,
    insert_Order_details,
    insert_Network_details,
    insert_Node_details
}