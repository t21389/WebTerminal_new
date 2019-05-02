var sql = require("../DBConnection");
    
async function insert_user_list(values) {
  return new Promise(async (resolve, reject) => {
    let insertquery = `INSERT INTO user_list(username,privilege) VALUES ?`;
    sql.con.query(insertquery, [[values]], async function (err, results) {
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

async function insert_user_log(values) {
    return new Promise(async (resolve, reject) => {
      let insertquery = `INSERT INTO user_log(username,login_date,login_time,logout_date,logout_time) VALUES ?`;
      sql.con.query(insertquery, [[values]], async function (err, results) {
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
  
  module.exports = {
      insert_user_list,
      insert_user_log
    }