var sql = require("../DBConnection");

async function delete_OtnIntfInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM OtnIntfInfo`; //ukey, CardId, IntfId, Functionality, BitRate, InterfaceType
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


async function delete_SfpInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM SfpInfo`;// ukey, CardId, SwitchId, SfpNo, SfpStatus, Name, VendorName, VendorId, SerialNo, TxRxstatus, AlsStatus, OpticalReach
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

async function delete_ClientInterfaceInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM ClientInterfaceInfo`;//ukey, CardId, ClientIntfId, ClientType, ClientName, TribSetId, Status, Line`PortNo
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

async function delete_TrailTerminationInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM TrailTerminationInfo`;//ukey, CardId, IntfId, Position, Segment, Sapi, SIcc, Dapi, DIcc, OpSpecific, TimDetMode
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

async function delete_GCCInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM GCCInfo`;//ukey, CardId, IntfId, GccType, GccStatus
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

async function delete_PayLoadInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM PayLoadInfo`;//ukey, CardId, IntfId, PayloadType, TribSlot
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

async function delete_FecInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM FecInfo`//ukey, CardId, IntfId, FecType, FecStatus
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

async function delete_FecErrorInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM FecErrorInfo`;//ukey, CardId, IntfId, ErrRate, errMode, errStatus
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

async function delete_TcmPriorInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM TcmPriorInfo`;//ukey, CardId, IntfId, Position, Priority1, Priority2, Priority3, Priority4, Priority5, Priority6, Priority7, Priority8
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

async function delete_TcmInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM TcmInfo`;//ukey, CardId, IntfId, ActStatus, ActValue, Segment, Position, TcmMode
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

async function delete_CardConfigInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM CardConfigInfo`;//ukey, CardId, State, CardType, CardSubType, TxWavelengthNum, RxWavelengthNum, Direction, LinePortNo, PortNum
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

async function delete_WavelengthStatus() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM WavelengthStatus`;//WavelengthNo, EastStatus, WestStatus, NorthStatus, SouthStatus, NorthEastStatus, NorthWestStatus, SouthEastStatus, SouthWestStatus
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

async function delete_WavelengthValues() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM WavelengthValues`;//WavelengthNo, Value, Frequency
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

async function delete_neInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM neInfo`;//stationName, siteName, ipv4, subnet, gateway, mac, ipv6, neType, gneFlag, opticalReach, degree, orderOfOtm, snmpAgentVid, systemCapacity, topology, direction, rcvDate, rcvTime, PotpType, IlaType
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

async function delete_SystemErrors() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM SystemErrors`;//ukey, CardId, Opcode, ErrorCode, ErrorString, date1, time
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

async function delete_logInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM logInfo`;//log_date, command, userLct
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

async function delete_ChannelConfig() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM ChannelConfig `;//Direction, Wavelength, Attenuation, Action, ChannelWidt, ACM, CCM
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

async function delete_AmpfConfigInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM AmpfConfigInfo`;//ukey, CardId, Gain, AmpfType, Status, Direction
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

async function delete_ProtectionConfigInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM ProtectionConfigInfo`;//ukey, CardId, ActiveLine, ProtectionType, Command
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

async function delete_MinimumConfigInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM MinimumConfigInfo`;//CardType, ExpectedFlag, AlarmFlag
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

async function delete_McsPortMappingInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM McsPortMappingInfo`;//ukey, CardId, McsModuleNum, SwitchPort, CommonPort
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

async function delete_LineChannelProtectionDetailsInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM LineChannelProtectionDetailsInfo`;//mpnUkey, mpnCardId, mpnCardType, mpnCardSubType, olpUkey, olpCardId, olpCardType, olpCardSubType, protectionMechanism, protectionStatus , activeLine, protectiontype, currentProtectionStatus, protectionTopology
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

async function delete_loopbackInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM loopbackInfo`;//ukey, CardId, IntfId, loopbackType, loopbackStatus
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

async function delete_ocmConfigInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM ocmConfigInfo`;//ukey, CardId, OcmId
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

async function delete_DirectionNames() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM DirectionNames`;//Direction, Name
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

async function delete_AggregatorInfo() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM AggregatorInfo`;//aUkey, aCardId, aLinePortNo, mpnUkey, mpnCardId, mpnClientPortNo
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

async function delete_SubrackDetails() {
  return new Promise(async (resolve, reject) => {
    let deletequery = `DELETE FROM SubrackDetails`;//RackId, SubrackId, ukey, Make, SerialNo, Model, ManfYear
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
  delete_OtnIntfInfo, 
  delete_SfpInfo, 
  delete_ClientInterfaceInfo, 
  delete_TrailTerminationInfo, 
  delete_GCCInfo, 
  delete_PayLoadInfo, 
  delete_FecInfo, 
  delete_FecErrorInfo, 
  delete_TcmPriorInfo, 
  delete_TcmInfo, 
  delete_CardConfigInfo, 
  delete_WavelengthStatus, 
  delete_WavelengthValues, 
  delete_neInfo, 
  delete_SystemErrors, 
  delete_logInfo, 
  delete_ChannelConfig, 
  delete_AmpfConfigInfo, 
  delete_ProtectionConfigInfo, 
  delete_MinimumConfigInfo, 
  delete_McsPortMappingInfo, 
  delete_ProtectionDetailsInfo, 
  delete_LineChannelProtectionDetailsInfo, 
  delete_loopbackInfo, 
  delete_ocmConfigInfo, 
  delete_DirectionNames, 
  delete_AggregatorInfo, 
  delete_SubrackDetails
}
