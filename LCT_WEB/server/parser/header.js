//var Nodeinfo = require('./nodeinfo');
var call = require("./callback");
var code=require("./Opcode");
var fs = require("fs");
var data;
const fileContents = fs.readFileSync("./JSON/systeminfo.json", "utf8");

//const fileContents1 = fs.readFileSync("./JSON/CmCurrentCardStatus.json", "utf8");

class Headers {
  constructor() {
    var cd = new code.Opcode();
    this.cb = new call.Callback();

    this.opcode=cd.OCM_INV_NODEINFO_READ;
  }

   getOpcode()
   {
      //console.log("opcode ==> ", data.Header.OpCode);
      return this.opcode;
   }

  getversion() {
    const src = fs
      .readFileSync("version.properties")
      .toString()
      .split(",");
    var version;
    for (let i = 0; i < src.length; i++) {
      var obj = src[i].split("=");
      if (obj[0].toLowerCase().trim(" ") == "version")
        version = obj[1].trim(" ");
    }
    return version;
    console.log("version is :", version);
  }

  parse() {
    data = JSON.parse(fileContents);
    var version = this.getversion();
    //console.log("version ==",version);
    if (data.Header.Version == version) {
       this.cb.execute[this.getOpcode()].parse();
     // this.cb.execute[data.Header.OpCode].parse();
    }
  }
}
var header = new Headers();
header.parse();