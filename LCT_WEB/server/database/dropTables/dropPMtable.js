var sql = require("../DBConnection")
var fs = require("fs");

async function dropPM() {
  return new Promise(async (resolve, reject) => {
    try {
      var pmquery = fs.readFileSync("../sqlFiles/dropTable/dropPM.sql").toString().split(';');

      for (let i = 0; i < pmquery.length - 1; i++) {
        sql.con.query(pmquery[i], function (err, results) {
          if (err) {
            console.log(err.message);
          }
          else {
            console.log("Table Droped", results);
          }
        });
      }
      if (i == pmquery.length - 1)
        resolve("ok");
    }
    catch (error) {
      reject(error)

    }
  })

}
module.exports = { dropPM }

