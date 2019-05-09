var db=require("../DB");
    class CmCurrentCardStatus
    {
        constructor(values)
        {
          this.values=values;
        }
        async insert()
        {
            return new Promise(async (resolve, reject) => {
              let insertquery='INSERT INTO CmCurrentCardStatus SET ?';
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
                let updatequery = `UPDATE CmCurrentCardStatus SET CardSubType=?,CardType=?,GuiId=?,TimeStamp=?,RackId=?,SubrackId=?,CardId=?,CardState=? where UniqueCardKey=?`;
                db.con.query(updatequery,[this.values[0]["CardSubType"],this.values[0]["CardType"],this.values[0]["GuiId"],this.values[0]["TimeStamp"],this.values[0]["RackId"],this.values[0]["SubrackId"],this.values[0]["CardId"],this.values[0]["CardState"],this.values[0]["UniqueCardKey"]], async function (err, results) {
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
            let insertquery = `DELETE FROM CmCurrentCardStatus where UniqueCardKey=?`;
            db.con.query(insertquery, [this.values[0]["UniqueCardKey"]], async function (err, results) {
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
            let insertquery = `select * FROM CmCurrentCardStatus`;
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
    
    module.exports={CmCurrentCardStatus}
    
//  var o=[{RackId:2,SubrackId:1,CardId:1,CardState:2,CardSubType:1,CardType:3,GuiId:1,TimeStamp:"oooooobbhcvu"}];
//     var o_d=new CmCurrentCardStatus(o);
//     //o_d.insert();
//     o_d.update();
//     // o_d.delete();
//     o_d.fetch();