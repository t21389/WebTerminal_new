var sql=require("../DBConnection");

async function fetch_OtnIntfInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from OtnIntfInfo`; //ukey,CardId,IntfId,Functionality,BitRate,InterfaceType 
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

async function fetch_SfpInfo()
{
    return new Promise(async (resolve, reject) => {
      let fetchquery = `select * from SfpInfo`; // ukey,CardId,SwitchId,SfpNo,SfpStatus,Name,VendorName,VendorId,SerialNo,TxRxstatus,AlsStatus,OpticalReach
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

async function fetch_ClientInterfaceInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from ClientInterfaceInfo`; //ukey,CardId,ClientIntfId,ClientType,ClientName,TribSetId,Status,LinePortNo
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

async function fetch_TrailTerminationInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from TrailTerminationInfo`; // ukey,CardId,IntfId,Position,Segment,Sapi,SIcc,Dapi,DIcc,OpSpecific,TimDetMode
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

async function fetch_GCCInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from GCCInfo`; //ukey,CardId,IntfId,GccType,GccStatus 
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

async function fetch_PayLoadInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from PayLoadInfo`; // ukey,CardId,IntfId,PayloadType,TribSlot 
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
   
async function fetch_FecInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from FecInfo`; //ukey,CardId,IntfId,FecType,FecStatus
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
    
async function fetch_FecErrorInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from FecErrorInfo`; //ukey,CardId,IntfId,ErrRate,errMode,errStatus 
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

async function fetch_TcmPriorInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from TcmPriorInfo`; //ukey,CardId,IntfId,Position,Priority1,Priority2,Priority3,Priority4,Priority5,Priority6,Priority7,Priority8 
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
    
async function fetch_TcmInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from TcmInfo`; // ukey,CardId,IntfId,ActStatus,ActValue,Segment,Position,TcmMode
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

async function fetch_CardConfigInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from CardConfigInfo`; //ukey,CardId,State,CardType,CardSubType,TxWavelengthNum,RxWavelengthNum,Direction,LinePortNo,PortNum 
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

async function fetch_WavelengthStatus()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from WavelengthStatus`; // WavelengthNo,EastStatus,WestStatus,NorthStatus,SouthStatus,NorthEastStatus,NorthWestStatus,SouthEastStatus,SouthWestStatus
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

async function fetch_Wavelength()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from Wavelength`; //WavelengthNo,Value,Frequency 
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

async function fetch_neInfo()
{
  return new Promise(async (resolve, reject) => {
   
    let fetchquery = `select * from neInfo`; // stationName,siteName,ipv4,subnet,gateway,mac,ipv6,neType,gneFlag,opticalReach,degree,orderOfOtm,snmpAgentVid,systemCapacity,topology,direction,rcvDate,rcvTime,PotpType,IlaType 
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

async function fetch_SystemErrors()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from SystemErrors`; // ukey,CardId,Opcode,ErrorCode,ErrorString,date1,time
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

async function fetch_logInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from logInfo`; //log_date,command,userLct 
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

async function fetch_ChannelConfig ()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from ChannelConfig`; // Direction,Wavelength,Attenuation,Action,ChannelWidt,ACM,CCM
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

async function fetch_AmpfConfigInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from AmpfConfigInfo`; // ukey,CardId,Gain,AmpfType,Status,Direction
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

async function fetch_ProtectionConfigInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from ProtectionConfigInfo`; // ukey,CardId,ActiveLine,ProtectionType,Command
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

async function fetch_MinimumConfigInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from MinimumConfigInfo`;  // CardType,ExpectedFlag,AlarmFlag
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

async function fetch_McsPortMappingInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from McsPortMappingInfo`; // ukey,CardId,McsModuleNum,SwitchPort,CommonPort
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

async function fetch_LineChannelProtectionDetailsInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from LineChannelProtectionDetailsInfo`; // mpnUkey,mpnCardId,mpnCardType,mpnCardSubType,olpUkey,olpCardId,olpCardType,olpCardSubType,protectionMechanism,protectionStatus ,activeLine,protectiontype,currentProtectionStatus,protectionTopology
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

async function fetch_loopbackInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from loopbackInfo`; // ukey,CardId,IntfId,loopbackType,loopbackStatus
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

async function fetch_ocmConfigInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from ocmConfigInfo`; // ukey,CardId,OcmId
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

async function fetch_DirectionNames()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from DirectionNames`; // Direction,Name
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

async function fetch_AggregatorInfo()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from AggregatorInfo`; // aUkey,aCardId,aLinePortNo,mpnUkey,mpnCardId,mpnClientPortNo
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

async function fetch_SubrackDetails()
{
  return new Promise(async (resolve, reject) => {
    let fetchquery = `select * from SubrackDetails`; // RackId,SubrackId,ukey,Make,SerialNo,Model,ManfYear
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

module.exports={
    fetch_OtnIntfInfo,
    fetch_SfpInfo,
    fetch_ClientInterfaceInfo,
    fetch_TrailTerminationInfo,
    fetch_GCCInfo,
    fetch_PayLoadInfo,
    fetch_FecInfo,
    fetch_FecErrorInfo,
    fetch_TcmPriorInfo,
    fetch_TcmInfo,
    fetch_CardConfigInfo,
    fetch_WavelengthStatus,
    fetch_Wavelength,
    fetch_neInfo,
    fetch_SystemErrors,
    fetch_logInfo,
    fetch_ChannelConfig,
    fetch_AmpfConfigInfo,
    fetch_ProtectionConfigInfo,
    fetch_MinimumConfigInfo,
    fetch_McsPortMappingInfo,
    fetch_ProtectionDetailsInfo,
    fetch_LineChannelProtectionDetailsInfo,
    fetch_loopbackInfo,
    fetch_ocmConfigInfo,
    fetch_DirectionNames,
    fetch_AggregatorInfo,
    fetch_SubrackDetails
}
