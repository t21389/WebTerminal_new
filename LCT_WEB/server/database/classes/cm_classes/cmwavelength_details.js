var db=require("../DB");

class CmWavelengthDetail
  {
      constructor(values)
      {
        this.values=values;
      }
      async insert()
      {
          return new Promise(async (resolve, reject) => {
            let insertquery='INSERT INTO CmWavelengthDetail SET ?';
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
            let updatequery = `UPDATE CmWavelengthDetail SET Frequency=?,WavelengthVal=? where WavelengthNum=?`;
            db.con.query(updatequery,[this.values[0]["Frequency"],this.values[0]["WavelengthVal"],this.values[0]["WavelengthNum"]], async function (err, results) {
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
          let insertquery = `DELETE FROM CmWavelengthDetail where WavelengthNum=?`;
          db.con.query(insertquery, [this.values[0]["WavelengthNum"]], async function (err, results) {
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
          let insertquery = `select * FROM CmWavelengthDetail`;
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
  
  module.exports={CmWavelengthDetail}
  
//   var o=[{WavelengthNum:1,Frequency:54.6,WavelengthVal:156.33}];
//   var o_d=new CmWavelengthDetail(o);
//   o_d.insert();
//   //o_d.update();
//   // o_d.delete();
//   o_d.fetch();