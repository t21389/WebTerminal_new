var sql = require("../DBConnection");

async function insert_cscc_och_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_och_current_alarms(cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_cscc_ots_oms_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_ots_oms_current_alarms(cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_cscc_device_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_device_current_alarms(cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_tpn_client_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_client_current_alarms(cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_tpn_otu_odu_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_otu_odu_current_alarms(cardId, alarmId, category, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_tpn_device_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_device_current_alarms(cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_amplifier_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO amplifier_current_alarms(cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_lineCard_current_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO lineCard_current_alarms(cardType, cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey) VALUES ?`;
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

async function insert_cscc_och_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_och_history_alarms(cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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

async function insert_cscc_ots_oms_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_ots_oms_history_alarms(cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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


async function insert_cscc_device_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO cscc_device_history_alarms(cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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

async function insert_tpn_client_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_client_history_alarms(cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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


async function insert_tpn_otu_odu_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_otu_odu_history_alarms(cardId, alarmId, category, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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


async function insert_tpn_device_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO tpn_device_history_alarms(cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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

async function insert_amplifier_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO amplifier_history_alarms(cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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


async function insert_lineCard_history_alarms(values) {
    return new Promise(async (resolve, reject) => {
        let insertquery = `INSERT INTO lineCard_history_alarms(cardType, cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey) VALUES ?`;
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
    insert_cscc_och_current_alarms, 
    insert_cscc_ots_oms_current_alarms, 
    insert_cscc_device_current_alarms, 
    insert_tpn_client_current_alarms, 
    insert_tpn_otu_odu_current_alarms, 
    insert_tpn_device_current_alarms, 
    insert_amplifier_current_alarms, 
    insert_lineCard_current_alarms, 
    insert_cscc_och_history_alarms, 
    insert_cscc_ots_oms_history_alarms, 
    insert_cscc_device_history_alarms, 
    insert_tpn_client_history_alarms, 
    insert_tpn_otu_odu_history_alarms, 
    insert_tpn_device_history_alarms, 
    insert_amplifier_history_alarms, 
    insert_lineCard_history_alarms, 
}