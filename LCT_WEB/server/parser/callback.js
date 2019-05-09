var Node = require("./SystemInfo");
var Card=require("./CmCurrentCardStatus");
var Client=require("./CmClientInfo");
var opcode = require('./Opcode');
var Wavelength=require("./CmWaveLengthDetail");
var Expected=require("./CmExpectedConfig");
var DirString=require("./CmDirString");
class Callback {

  constructor() {

    /**This declares the object for all feature to be implemented */
    var nodeInfo = new Node.NodeInfo_Parser();
    var cmCurrent=new Card.CmCurrentCardStatus_Parser();
    var cmClient=new Client.CmClientIntfAdaptInfo();
    var cmWave= new Wavelength.CmWavelengthDetail();
    var cmExpected=new Expected.CmExpectedConfig_Parser();
    var cmDirString=new DirString.CmDirString_parser();
    var cd = new opcode.Opcode();


    /**
     * This section adds the opcode callback
     */
    this.execute = {};
    this.execute[cd.OCM_INV_NODEINFO_READ] = nodeInfo;
     this.execute[cd.CURRENT_CARD_STATUS]=cmCurrent;
     this.execute[cd.CLINT_INFO]=cmClient;
     this.execute[cd.WAVELENGTH]=cmWave;
    this.execute[cd.EXPECTED_CONFIG]=cmExpected;
     this.execute[cd.DIR_STRING]=cmDirString;
  }
}


module.exports = {
  Callback
};

