var sql = require("../DBConnection");
    
async function fetch_user_list() {
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from user_list`; //username,privilege
    sql.con.query(fetchquery, async function (err, results) {
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

async function fetch_user_log() {
    return new Promise(async (resolve, reject) => {
      let fetchquery = `select * from user_log`; //username,login_date,login_time,logout_date,logout_time
      sql.con.query(fetchquery, async function (err, results) {
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
      fetch_user_list,
      fetch_user_log
    }