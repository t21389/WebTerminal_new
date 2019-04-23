var sql = require("../DBConnection")
var fs = require("fs");

async function dropCM() {
  return new Promise(async (resolve, reject) => {
    try {
      var cmquery = fs.readFileSync("../sqlFiles/dropTable/dropCM.sql").toString().split(';');

      for (let i = 0; i < cmquery.length - 1; i++) {
        sql.con.query(cmquery[i], function (err, results) {
          if (err) {
            console.log(err.message);
          }
          else {
            console.log("Table Droped", results);
          }
        });
      }
      if (i == cmquery.length - 1)
        resolve("ok");
    }
    catch (error) {
      reject(error)

    }
  })

}
module.exports = { dropCM }
