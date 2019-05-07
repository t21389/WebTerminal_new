var db=require("../DB");
 
    class SubrackChassisDetails
    {
        constructor(values)
        {
          this.values=values;
        }
        async insert()
        {
            return new Promise(async (resolve, reject) => {
              let insertquery='INSERT INTO SubrackChassisDetails SET ?';
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
              let updatequery = `UPDATE SubrackChassisDetails SET ChassisType=? where RackId=? AND SubRackId=?`;
              db.con.query(updatequery,[this.values[0]["ChassisType"],this.values[0]["RackId"],this.values[0]["SubRackId"]], async function (err, results) {
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
            let insertquery = `DELETE FROM SubrackChassisDetails where RackId=? AND SubRackId=?`;
            db.con.query(insertquery, [this.values[0]["RackId"],this.values[0]["SubRackId"]], async function (err, results) {
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
            let insertquery = `select * FROM SubrackChassisDetails`;
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
    
    module.exports={SubrackChassisDetails}
    
    // var o=[{RackId:1,SubRackId:3,ChassisType:2}];
    // var o_d=new SubrackChassisDetails(o);
    // o_d.insert();
    // // o_d.update();
    // // o_d.delete();