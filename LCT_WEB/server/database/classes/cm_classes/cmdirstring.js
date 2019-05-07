var db=require("../DB");

class CmDirString
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO CmDirString SET ?';
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
            let updatequery = `UPDATE CmDirString SET DirStr=?,GuiId=?,TimeStamp=? where DirVal=?`;
            db.con.query(updatequery,[this.values[0]["DirStr"],this.values[0]["GuiId"],this.values[0]["TimeStamp"],this.values[0]["DirVal"]], async function (err, results) {
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
        let insertquery = `DELETE FROM CmDirString where DirVal=?`;
        db.con.query(insertquery, [this.values[0]["DirVal"]], async function (err, results) {
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
        let insertquery = `select * FROM CmDirString`;
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

module.exports={CmDirString}

//  var o=[{DirVal:3,DirStr:"oooooooo",GuiId:1,TimeStamp:"fsdoooooooodfgdf"}];
//  var o_d=new CmDirString(o);
//  o_d.insert();
// //  o_d.update();
// //  o_d.delete();
// //  o_d.fetch();