var sql = require("../DBConnection");

async function fetch_cscc_och_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_och_current_alarms`; //cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_cscc_ots_oms_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_ots_oms_current_alarms`;  //cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_cscc_device_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_device_current_alarms`; //cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_tpn_client_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_client_current_alarms`; //cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_tpn_otu_odu_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_otu_odu_current_alarms`; //cardId, alarmId, category, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_tpn_device_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_device_current_alarms`; //cardId, alarmId, category, interface, direction, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_amplifier_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from amplifier_current_alarms`; //cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_lineCard_current_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from lineCard_current_alarms`; //cardType, cardId, alarmId, category, interface, severity, occDate, occTime, maskbit, cardKey
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

async function fetch_cscc_och_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_och_history_alarms`; //cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey
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

async function fetch_cscc_ots_oms_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_ots_oms_history_alarms`; //cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey
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


async function fetch_cscc_device_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from cscc_device_history_alarms`; //cardId, alarmId, category, direction, wavelength, severity, occDate, occTime, clrDate, clrTime, cardKey
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

async function fetch_tpn_client_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_client_history_alarms`; //cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey
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


async function fetch_tpn_otu_odu_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_otu_odu_history_alarms`; //cardId, alarmId, category, severity, occDate, occTime, clrDate, clrTime, cardKey
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


async function fetch_tpn_device_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from tpn_device_history_alarms`; //cardId, alarmId, category, interface, direction, severity, occDate, occTime, clrDate, clrTime, cardKey
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

async function fetch_amplifier_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from amplifier_history_alarms`; //cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey
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


async function fetch_lineCard_history_alarms() {
    return new Promise(async (resolve, reject) => {
        let fetchquery = `select * from lineCard_history_alarms`; //cardType, cardId, alarmId, category, interface, severity, occDate, occTime, clrDate, clrTime, cardKey
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
    fetch_cscc_och_current_alarms, 
    fetch_cscc_ots_oms_current_alarms, 
    fetch_cscc_device_current_alarms, 
    fetch_tpn_client_current_alarms, 
    fetch_tpn_otu_odu_current_alarms, 
    fetch_tpn_device_current_alarms, 
    fetch_amplifier_current_alarms, 
    fetch_lineCard_current_alarms, 
    fetch_cscc_och_history_alarms, 
    fetch_cscc_ots_oms_history_alarms, 
    fetch_cscc_device_history_alarms, 
    fetch_tpn_client_history_alarms, 
    fetch_tpn_otu_odu_history_alarms, 
    fetch_tpn_device_history_alarms, 
    fetch_amplifier_history_alarms, 
    fetch_lineCard_history_alarms, 
}