var db=require("./DB");
class Order_details
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO Order_details SET ?';
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
            let updatequery = `UPDATE Order_details SET ConnType=?,OrderType=?,InterfaceId=?,UserId=?,RemoteIp=?,State=?,SDNReady=? where OrderId=?`;
            db.con.query(updatequery,[this.values[0]["ConnType"],this.values[0]["OrderType"],this.values[0]["InterfaceId"],this.values[0]["UserId"],this.values[0]["RemoteIp"],this.values[0]["State"],this.values[0]["SDNReady"],this.values[0]["OrderId"]], async function (err, results) {
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
        let insertquery = `DELETE FROM Order_details where OrderId=?`;
        db.con.query(insertquery, [this.values[0]["OrderId"]], async function (err, results) {
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
        let insertquery = `select * FROM Order_details`;
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

module.exports={Order_details}

// var o=[{OrderId:"O122",ConnType:1,OrderType:2,InterfaceId:123,UserId:"eytyyu",RemoteIp:"192.168.14.159",State:"Ready",SDNReady:1}];
//var o_d=new Order_details();
// //o_d.insert();
// //o_d.update();
// o_d.delete();
//o_d.fetch();