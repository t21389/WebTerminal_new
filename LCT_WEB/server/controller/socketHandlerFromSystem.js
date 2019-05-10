const axios = require("axios");

module.exports.fHandleSocketFromSystem = async opcode => {
  console.log("fHandleSocketFromSystem :: OpCode:", opcode);
  switch (opcode) {
    case 1234:
      {
        console.log("Send req to fetch for :", opcode);
        let reqUrl = "http://192.168.115.21:8802/fetch_data";
        let response = await axios.post(reqUrl, {
          OpCode: opcode
        });

        console.log("fHandleSocketFromSystem :: Response :: ", response.data);
      }
      break;

    default:
      console.log("fHandleSocketFromSystem :: Default Case");
      break;
  }
};
