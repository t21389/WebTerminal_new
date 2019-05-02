var sql = require("../DBConnection");

async function insert_SubrackKeys(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO SubrackKeys(RackId, SubrackId, ukey, SubrackAlarmStaus) VALUES ?`;
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

async function insert_ContCardInfo(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO ContCardInfo(ukey, CardId, State, Status, Mac, Ip, Uid, CardType, CardSubType, SerialNo) VALUES ?`;
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

async function insert_CardInfo(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO CardInfo(ukey, CardId, State, CardType, CardSubType, SerialNo) VALUES ?`;
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

async function insert_DiscoveredTpc(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO DiscoveredTpc(RackId, CardId, Mac, Ip, State, Status, CardType, CardSubType, SerialNo) VALUES ?`;
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

async function insert_ControllerAlarmStatus(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO ControllerAlarmStatus(ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus) VALUES ?`;
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

async function insert_TpnAlarmStatus(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO TpnAlarmStatus(ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus) VALUES ?`;
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
    insert_SubrackKeys, 
    insert_ContCardInfo, 
    insert_CardInfo, 
    insert_DiscoveredTpc, 
    insert_ControllerAlarmStatus, 
    insert_TpnAlarmStatus
}