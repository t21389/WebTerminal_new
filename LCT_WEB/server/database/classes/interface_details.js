var db=require("./DB")
class Interface_details
{
    constructor(values)
    {
      this.values=values;
      console.log(this.values);
      console.log(Object.keys(this.values[0]));
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO Interface_details SET ?';
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
            let updatequery = `UPDATE Interface_details SET InterfaceName=?,WsIp=?,WsNetMask=? where InterfaceId=?`;
            db.con.query(updatequery,[this.values[0]["InterfaceName"],this.values[0]["WsIp"],this.values[0]["WsNetMask"],this.values[0]["InterfaceId"]], async function (err, results) {
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
        let insertquery = `DELETE FROM Interface_details where InterfaceId=?`;
        db.con.query(insertquery, [this.values[0]["InterfaceId"]], async function (err, results) {
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
        let insertquery = `select * FROM Interface_details`;
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
module.exports={Interface_details}

//var v=[{InterfaceId:123,InterfaceName:"Wi-Fi4",WsIp:"192:168:115:16",WsNetMask:"ff:ff:ff:ff:ff:ff"}];
//var inter= new Interface_details(v);
//inter.insert();
//inter.update();
//inter.delete();