var sql=require("../DBConnection")
var fs =require("fs");

async function dropMS() {
  return new Promise(async (resolve, reject) => {
    try {
var msquery=fs.readFileSync("../sqlFiles/dropTable/dropteMS.sql").toString().split(';');

for(let i=0;i<msquery.length-1;i++)
{
    sql.con.query(msquery[i], function (err, results) {
        if (err) {
          console.log(err.message);
        }
        else {
          console.log("Table Droped", results);
        }
      });
    }
    if (i == msquery.length - 1)
      resolve("ok");
  }
  catch (error) {
    reject(error)

  }
})

}
module.exports = { dropMS }
