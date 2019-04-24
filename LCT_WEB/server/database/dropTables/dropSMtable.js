var sql = require("../DBConnection")
var fs = require("fs");

async function dropSM() {
  return new Promise(async (resolve, reject) => {
    try {
      var smquery = fs.readFileSync("../sqlFiles/dropTable/dropSM.sql").toString().split(';');

      for (let i = 0; i < smquery.length - 1; i++) {
        sql.con.query(smquery[i], function (err, results) {
          if (err) {
            console.log(err.message);
          }
          else {
            console.log("Table Droped", results);
          }
        });
      }
      if (i == smquery.length - 1)
        resolve("ok");
    }
    catch (error) {
      reject(error)

    }
  })

}
module.exports = { dropSM }
