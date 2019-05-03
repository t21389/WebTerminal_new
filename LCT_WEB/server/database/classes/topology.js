var db=require("./DB");
class Topology
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO Topology SET ?';
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
          let updatequery = `UPDATE Topology SET Dir1=?,Dir1IsConnected=?,Dir2=?,Dir2IsConnected=?,Dir3=?,Dir3IsConnected=?,Dir4=?,Dir4IsConnected=?,Dir5=?,Dir5IsConnected=?,Dir6=?,Dir6IsConnected=?,Dir7=?,Dir7IsConnected=?,Dir8=?,Dir8IsConnected=?,IsEmsConnected=?,GuiId=?,TimeStamp=? where NetworkId=? AND NodeId=?`;
          db.con.query(updatequery,[this.values[0]["Dir1"],this.values[0]["Dir1IsConnected"],this.values[0]["Dir2"],this.values[0]["Dir2IsConnected"],this.values[0]["Dir3"],this.values[0]["Dir3IsConnected"],this.values[0]["Dir4"],this.values[0]["Dir4IsConnected"],this.values[0]["Dir5"],this.values[0]["Dir5IsConnected"],this.values[0]["Dir6"],this.values[0]["Dir6IsConnected"],this.values[0]["Dir7"],this.values[0]["Dir7IsConnected"],this.values[0]["Dir8"],this.values[0]["Dir8IsConnected"],this.values[0]["IsEmsConnected"],this.values[0]["GuiId"],this.values[0]["TimeStamp"],this.values[0]["NetworkId"],this.values[0]["NodeId"]], async function (err, results) {
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
        let insertquery = `DELETE FROM Topology where NetworkId=? AND NodeId=?`;
        db.con.query(insertquery, [this.values[0]["NetworkId"],this.values[0]["NodeId"]], async function (err, results) {
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
            let insertquery = `select * FROM Topology`;
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

module.exports={Topology}

// var o=[{NetworkId:"N123",NodeId:2,Dir1:1,Dir1IsConnected:0,Dir2:1,Dir2IsConnected:3,Dir3:1,Dir3IsConnected:1,Dir4:1,Dir4IsConnected:1,Dir5:1,Dir5IsConnected:1,Dir6:1,Dir6IsConnected:1,Dir7:1,Dir7IsConnected:1,Dir8:1,Dir8IsConnected:1,IsEmsConnected:1,GuiId:1,TimeStamp:"gdfgdfhdfhdfhdf"}];
// var o_d=new Topology(o);
// o_d.insert();
// //o_d.update();
// // o_d.delete();