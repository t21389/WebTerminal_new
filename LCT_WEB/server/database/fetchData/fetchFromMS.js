var sql = require("../DBConnection");

async function fetch_SubrackKeys() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from SubrackKeys`; //RackId, SubrackId, ukey, SubrackAlarmStaus
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

async function fetch_ContCardInfo() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from ContCardInfo`; //ukey, CardId, State, Status, Mac, Ip, Uid, CardType, CardSubType, SerialNo
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

async function fetch_CardInfo() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from CardInfo`; //ukey, CardId, State, CardType, CardSubType, SerialNo
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

async function fetch_DiscoveredTpc() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from DiscoveredTpc`; //RackId, CardId, Mac, Ip, State, Status, CardType, CardSubType, SerialNo
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

async function fetch_ControllerAlarmStatus() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from ControllerAlarmStatus `; //ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus
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

async function fetch_TpnAlarmStatus() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from TpnAlarmStatus`; //ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus
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
    fetch_SubrackKeys, 
    fetch_ContCardInfo, 
    fetch_CardInfo, 
    fetch_DiscoveredTpc, 
    fetch_ControllerAlarmStatus, 
    fetch_TpnAlarmStatus
}