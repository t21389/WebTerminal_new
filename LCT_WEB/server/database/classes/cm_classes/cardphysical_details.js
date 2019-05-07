var db=require("../DB");

class CardPhysicalDetails
{
    constructor(values)
    {
      this.values=values;
    }
    async insert()
    {
        return new Promise(async (resolve, reject) => {
          let insertquery='INSERT INTO CardPhysicalDetails SET ?';
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
          let updatequery = `UPDATE CardPhysicalDetails SET NoOfSlotsOccupied=? where CardType=? AND CardSubType=?`;
          db.con.query(updatequery,[this.values[0]["NoOfSlotsOccupied"],this.values[0]["CardType"],this.values[0]["CardSubType"]], async function (err, results) {
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
        let insertquery = `DELETE FROM CardPhysicalDetails where CardType=? AND CardSubType=?`;
        db.con.query(insertquery, [this.values[0]["CardType"],this.values[0]["CardSubType"]], async function (err, results) {
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
        let insertquery = `select * FROM CardPhysicalDetails`;
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

module.exports={CardPhysicalDetails}

// var o=[{CardType:1,CardSubType:3,NoOfSlotsOccupied:12}];
// var o_d=new CardPhysicalDetails(o);
// o_d.insert();
// //o_d.update();
// // o_d.delete();
// o_d.fetch();