    var db=require("../DB");
    class CmExpectedConfig
    {
        constructor(values)
        {
          this.values=values;
        }
        async insert()
        {
            return new Promise(async (resolve, reject) => {
              let insertquery='INSERT INTO CmExpectedConfig SET ?';
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
                let updatequery = `UPDATE CmExpectedConfig SET ExpectedFlag=? where NeType=? AND CardType=?`;
                db.con.query(updatequery,[this.values[0]["ExpectedFlag"],this.values[0]["NeType"],this.values[0]["CardType"]], async function (err, results) {
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
            let insertquery = `DELETE FROM CmExpectedConfig where NeType=? AND CardType=?`;
            db.con.query(insertquery, [this.values[0]["NeType"],this.values[0]["CardType"]], async function (err, results) {
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
            let insertquery = `select * FROM CmExpectedConfig`;
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
    
    module.exports={CmExpectedConfig}
    
//  var o=[{ExpectedFlag:0,NeType:0,CardType:3}];
//  var o_d=new CmExpectedConfig(o);
//  o_d.insert();
// //  o_d.update();
// //  o_d.delete();
// //  o_d.fetch();