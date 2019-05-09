        var db=require("../DB");

        class CmClientIntfAdaptInfo
        {
            constructor(values)
            {
              this.values=values;
            }
            async insert()
            {
                return new Promise(async (resolve, reject) => {
                  let insertquery='INSERT INTO CmClientIntfAdaptInfo SET ?';
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
                  let updatequery = `UPDATE CmClientIntfAdaptInfo SET ClientName=?,ClientType=?,GuiId=?,IntfStatus=?,LinePortNum=?,TimeStamp=?,TributarySetId=? where UniqueCardKey=? AND ClientIntfId=?`;
                  db.con.query(updatequery,[this.values[0]["ClientName"],this.values[0]["ClientType"],this.values[0]["GuiId"],this.values[0]["IntfStatus"],this.values[0]["LinePortNum"],this.values[0]["TimeStamp"],this.values[0]["TributarySetId"],this.values[0]["UniqueCardKey"],this.values[0]["ClientIntfId"]], async function (err, results) {
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
                let insertquery = `DELETE FROM CmClientIntfAdaptInfo where UniqueCardKey=? AND ClientIntfId=?`;
                db.con.query(insertquery, [this.values[0]["UniqueCardKey"],this.values[0]["ClientIntfId"]], async function (err, results) {
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
                let insertquery = `select * FROM CmClientIntfAdaptInfo`;
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
        
        module.exports={CmClientIntfAdaptInfo}
        
        // var o=[{CardId:1,CardSubType:2,CardType:4,ClientIntfId:2,ClientName:"nbhjsssrtd",ClientType:2,GuiId:4,IntfStatus:1,LinePortNum:1,RackId:1,SubrackId:1,TimeStamp:"sdvsdvfsdfsdf",TributarySetId:1}];
        // var o_d=new CmClientIntfAdaptInfo(o);
        // o_d.insert();
        // //o_d.update();
        // // o_d.delete();
        // o_d.fetch();