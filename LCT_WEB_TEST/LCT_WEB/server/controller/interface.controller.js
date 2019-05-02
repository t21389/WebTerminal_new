var a = require("../netinterface");


exports.callfunInterface = function (req, resp) {
    console.log("444444444444");
    var c = a.fn();
    console.log("function calling", JSON.stringify(c));
    resp.send(c);
}




//      function networkInterface(){

//         return require('os').networkInterfaces();

//       }
//       //var data=networkInterface();
//      // console.log(data);

//       exports.callfun = function(req,resp){
//         var data=networkInterface();
//           console.log("********",data);
//           req.params='getInterfaceData';
//       resp.send(JSON.stringify(data));
//       }


// //  


// //console.log("///ALL DATA OF NETWORK INTERFACE///",networkInterface());
// // var data=networkInterface();
// // resp.send(data);

// // var jsonData=JSON.stringify(data);
// // var jsonparse=JSON.parse(jsonData);
// // var length=Object.keys(data).length
// // console.log("Number of keys: ",length);

// // var networkinterface=[];

// // //console.log("//////",Object.values(data)[0]);
// //  for(i=0;i<length;i++){
// //    let v=Object.keys(data)[i];
// //    console.log("interface name "+i,": ",v);
// //    for(j=0;j<jsonparse[v].length;j++)
// //    {
// //     console.log("Address of "+v,": ",jsonparse[v][j].address);
// //     console.log("NetMask of "+v,": ",jsonparse[v][j].netmask);
// //     networkinterface.push({
// //       "Interface_name":v,"Interface_address":jsonparse[v][j].address,"Interface_netmask":jsonparse[v][j].netmask
// //     });
// //    }

// //  }
// //  console.log(networkinterface);

// // }


// // module.exports= callfun;