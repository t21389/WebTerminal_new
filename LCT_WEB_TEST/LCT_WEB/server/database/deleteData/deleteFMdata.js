var sql = require("../DBConnection");

async function delete_cscc_och_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_och_current_alarms`;//cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_cscc_ots_oms_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_ots_oms_current_alarms`;//cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_cscc_device_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_device_current_alarms`;//cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_tpn_client_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_client_current_alarms`;//cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_tpn_otu_odu_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_otu_odu_current_alarms`;//cardId, alarmId, category, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_tpn_device_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_device_current_alarms`;//cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_amplifier_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM amplifier_current_alarms`;//cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_lineCard_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM lineCard_current_alarms`;//cardType, cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_cscc_och_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_och_history_alarms`;//cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_cscc_ots_oms_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_ots_oms_history_alarms`;//cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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


async function delete_cscc_device_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM cscc_device_history_alarms`;//cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_tpn_client_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_client_history_alarms`;//cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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


async function delete_tpn_otu_odu_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_otu_odu_history_alarms`;//cardId, alarmId, category, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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


async function delete_tpn_device_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM tpn_device_history_alarms`;//cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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

async function delete_amplifier_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM amplifier_history_alarms`;//cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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


async function delete_lineCard_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let deletequery = `DELETE FROM lineCard_history_alarms`;//cardType, cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) 
        sql.con.query(deletequery, async function (err, results) {
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
    delete_cscc_och_current_alarms, 
    delete_cscc_ots_oms_current_alarms, 
    delete_cscc_device_current_alarms, 
    delete_tpn_client_current_alarms, 
    delete_tpn_otu_odu_current_alarms, 
    delete_tpn_device_current_alarms, 
    delete_amplifier_current_alarms, 
    delete_lineCard_current_alarms, 
    delete_cscc_och_history_alarms, 
    delete_cscc_ots_oms_history_alarms, 
    delete_cscc_device_history_alarms, 
    delete_tpn_client_history_alarms, 
    delete_tpn_otu_odu_history_alarms, 
    delete_tpn_device_history_alarms, 
    delete_amplifier_history_alarms, 
    delete_lineCard_history_alarms, 
}