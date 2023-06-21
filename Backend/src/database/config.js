import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config ();

const{
    HOST , PORT , HOST_URL , SQL_USER , SQL_SERVER , SQL_PORT , SQL_PASSWORD , SQL_DATABASE 
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPTED === "true";

assert (PORT , 'PORT is required');
assert (HOST , 'HOST is required');

const config = {
    port : PORT ,
    host : HOST ,
    url : HOST_URL ,
    sql : {
        server : SQL_SERVER ,
        database : SQL_DATABASE ,
        user : SQL_USER ,
        password : SQL_PASSWORD ,
        options:{
            encrypt:false,
            trustServerCertificate:true
        }
    }

}
 
export default config;
  