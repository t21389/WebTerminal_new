var db=require("./DB");

class Network_details
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO Network_details SET ?';
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
          let updatequery = `UPDATE Network_details SET NetworkName=?,OrderId=? where NetworkId=?`;
          db.con.query(updatequery,[this.values[0]["NetworkName"],this.values[0]["OrderId"],this.values[0]["NetworkId"]], async function (err, results) {
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
        let insertquery = `DELETE FROM Network_details where NetworkId=?`;
        db.con.query(insertquery, [this.values[0]["NetworkId"]], async function (err, results) {
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
        let insertquery = `select * FROM Network_details`;
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

module.exports={Network_details}

// var o=[{NetworkId:"N126",NetworkName:"dchfhff",OrderId:"O123"}];
// var o_d=new Network_details(o);
// //o_d.insert();
// o_d.update();
// // // o_d.delete();
// o_d.fetch();