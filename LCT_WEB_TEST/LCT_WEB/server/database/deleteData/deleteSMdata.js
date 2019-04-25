var sql = require("../DBConnection");
    
async function delete_user_list(values) {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM user_list`;//username,privilege
    sql.con.query(deletequery,async function (err, results) {
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

async function delete_user_log(values) {
    return new Promise(async (resolve, reject) => {
      let deletequery = `DELETE FROM user_log`;//username,login_date,login_time,logout_date,logout_time
      sql.con.query(deletequery,async function (err, results) {
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
      delete_user_list,
      delete_user_log
    }