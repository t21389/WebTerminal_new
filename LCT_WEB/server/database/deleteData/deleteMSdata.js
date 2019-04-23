var sql = require("../DBConnection");

async function delete_SubrackKeys(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM SubrackKeys`;//RackId, SubrackId, ukey, SubrackAlarmStaus
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

async function delete_ContCardInfo(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM ContCardInfo`;//ukey, CardId, State, Status, Mac, Ip, Uid, CardType, CardSubType, SerialNo
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

async function delete_CardInfo(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM CardInfo`;//ukey, CardId, State, CardType, CardSubType, SerialNo
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

async function delete_DiscoveredTpc(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM DiscoveredTpc`;//RackId, CardId, Mac, Ip, State, Status, CardType, CardSubType, SerialNo
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

async function delete_ControllerAlarmStatus(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM ControllerAlarmStatus`;//ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus
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

async function delete_TpnAlarmStatus(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM TpnAlarmStatus`;//ukey, CardType, CardId, InterfaceId, InterfaceAlarmStatus, CardAlarmStaus
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
    delete_SubrackKeys, 
    delete_ContCardInfo, 
    delete_CardInfo, 
    delete_DiscoveredTpc, 
    delete_ControllerAlarmStatus, 
    delete_TpnAlarmStatus
}