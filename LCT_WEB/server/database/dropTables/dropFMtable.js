var sql = require("../DBConnection")
var fs = require("fs");

async function dropFM() {
  return new Promise(async (resolve, reject) => {
    try {
      var fmquery = fs.readFileSync("../sqlFiles/dropTable/dropFM.sql").toString().split(';');

      for (let i = 0; i < fmquery.length - 1; i++) {
        sql.con.query(fmquery[i], function (err, results) {
          if (err) {
            console.log(err.message);
          }
          else {
            console.log("Table Droped", results);
          }
        });
      }
      if (i == fmquery.length - 1)
        resolve("ok");
    }
    catch (error) {
      reject(error)

    }
  })

}
module.exports = { dropFM }