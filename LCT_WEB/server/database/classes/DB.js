const mysql = require("mysql");
class DB
{
    constructor()
    {
        this.con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root123',
            database: 'LCTDB'
        });
        this.con.connect(function (err) {
            if (err) {
              return console.error('error: ' + err.message);
            }
            console.log('Connected to Database');
          });

        // this.logs=function()
        // {
        //     const timestamp = new Date().toISOString();
        //     console.log("created at",timestamp);
        // }
        
    }
    close() {
        return new Promise( ( resolve, reject ) => {
            this.con.end( err => {
                if ( err )
                    return reject( err );
                resolve();
            } );
        } );
    }
}
  
module.exports=new DB();
