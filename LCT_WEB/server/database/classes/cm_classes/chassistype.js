var db=require("../DB");
 
class ChassisType
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO ChassisType SET ?';
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
          let updatequery = `UPDATE ChassisType SET NoOfSlot=?,SystemType=?,SwitchSlot_1=?,SwitchSlot_2=? where ChassisTypeId=?`;
          db.con.query(updatequery,[this.values[0]["NoOfSlot"],this.values[0]["SystemType"],this.values[0]["SwitchSlot_1"],this.values[0]["SwitchSlot_2"],this.values[0]["ChassisTypeId"]], async function (err, results) {
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
        let insertquery = `DELETE FROM ChassisType where ChassisTypeId=?`;
        db.con.query(insertquery, [this.values[0]["ChassisTypeId"]], async function (err, results) {
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
        let insertquery = `select * FROM ChassisType`;
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

module.exports={ChassisType}

// var o=[{ChassisTypeId:2,NoOfSlot:14,SystemType:"vdhfhgd",SwitchSlot_1:7,SwitchSlot_2:2}];
// var o_d=new ChassisType(o);
// o_d.insert();
// // o_d.update();
// // o_d.delete();