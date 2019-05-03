var db=require("./DB");
class Node_details
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO Node_details SET ?';
            db.con.query(insertquery, this.values, (err, res) => {
              if(err) 
                return reject(err);
              console.log("result", res.affectedRows);
              resolve(res.affectedRows);
            });
          })
    }
    async update()
    {

        return new Promise(async (resolve, reject) => {
            let updatequery = `UPDATE Node_details SET NeType=?,Direction=?,StationName=?,SiteName=?,CtrlVersion=?,DataVersion=?,Degree=?,GneAddrType=?,GneFlag=?,Gateway=?,GneGateway=?,GneIp=?,GneIpPrefixLen=?,GneIpV6=?,GuiId=?,TimeStamp=?,IlaType=?,LctIp=?,McpIp=?,OpticalReach=?,PotpType=?,RouterAddrType=?,RouterId=?,RouterIpPrefixLen=?,SAPI=?,SystemCapacity=?,OrderOfOtm=?,Date=?,Month=?,Year=?,Hour=?,Minute=?,Second=?,Topology=?,Vlan=?,MacAddress=? where NetworkId=? AND NodeId=?`;
            db.con.query(updatequery,[this.values[0]["NeType"],this.values[0]["Direction"],this.values[0]["StationName"],this.values[0]["SiteName"],this.values[0]["CtrlVersion"],this.values[0]["DataVersion"],this.values[0]["Degree"],this.values[0]["GneAddrType"],this.values[0]["GneFlag"],this.values[0]["Gateway"],this.values[0]["GneGateway"],this.values[0]["GneIp"],this.values[0]["GneIpPrefixLen"],this.values[0]["GneIpV6"],this.values[0]["GuiId"],this.values[0]["TimeStamp"],this.values[0]["IlaType"],this.values[0]["LctIp"],this.values[0]["McpIp"],this.values[0]["OpticalReach"],this.values[0]["PotpType"],this.values[0]["RouterAddrType"],this.values[0]["RouterId"],this.values[0]["RouterIpPrefixLen"],this.values[0]["SAPI"],this.values[0]["SystemCapacity"],this.values[0]["OrderOfOtm"],this.values[0]["Date"],this.values[0]["Month"],this.values[0]["Year"],this.values[0]["Hour"],this.values[0]["Minute"],this.values[0]["Second"],this.values[0]["Topology"],this.values[0]["Vlan"],this.values[0]["MacAddress"],this.values[0]["NetworkId"],this.values[0]["NodeId"]], async function (err, results) {
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
    async delete()
    {
      return new Promise(async (resolve, reject) => {
        let insertquery = `DELETE FROM Node_details where NetworkId=? AND NodeId=?`;
        db.con.query(insertquery, [this.values[0]["NetworkId"],this.values[0]["NodeId"]], async function (err, results) {
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
    async fetch()
    {
      return new Promise(async (resolve, reject) => {
        let insertquery = `select * FROM Node_details`;
        db.con.query(insertquery, async function (err, results) {
          if (err) {
            console.log(err.message);
            reject(err);
          }
          else {
            console.log("result", results);
            resolve(results);
          }
        });
      })
    }
}

module.exports={Node_details};

//var d=[{NetworkId:"N123",NodeId:2,NeType:1,Direction:1,StationName:"xxxxxx",SiteName:"yyyyyy",CtrlVersion:1,DataVersion:1,Degree:1,GneAddrType:4,GneFlag:1,Gateway:"fhgj",GneGateway:"fjhgjh",GneIp:"huho",GneIpPrefixLen:21,GneIpV6:"ff:ff:ff:ff",GuiId:3,TimeStamp:"2038-01-19 03:14:07",IlaType:2,LctIp:"ffjhfj",McpIp:"hghggkj",OpticalReach:1,PotpType:1,RouterAddrType:4,RouterId:"gjhguygug",RouterIpPrefixLen:2,SAPI:"hfkhfhf",SystemCapacity:1,OrderOfOtm:11,Date:06,Month:05,Year:2019,Hour:11,Minute:23,Second:45,Topology:1,Vlan:11,MacAddress:"fjffkkkf"}];
//var n_d=new Node_details(d);
//n_d.insert();
//n_d.update();
//n_d.delete();