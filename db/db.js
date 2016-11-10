import mysql from 'mysql';
import config from '../config/index';

const mysqlPool = mysql.createPool({
    database: process.env.DB_DATABASE || config.db.database,
    host: process.env.DB_HOST || config.db.host,
    port: process.env.DB_PORT || config.db.port,
    user: process.env.DB_USER || config.db.user,
    password: process.env.DB_PASSWORD || config.db.password,
    connectionLimit: config.db.connectionLimit,
    multipleStatements: config.db.multipleStatements || false
});
pool.getConnection(function(err, connection){
        if(err) callback(err);
        else    callback(null, connection);
      });
    
    },
    function( connection, callback){

      connection.query( query, [userId], function(err, rows) {
        if(err) callback(err);
        else    callback(null, rows[0]);
        connection.release();
      });

    }
  ], function(err, row){
    if(err) finalCallback(err, null);
    else    finalCallback(err, row);
  });

const pool = {
    getConnection: () => {
        return new Promise((resolve, reject) => {
           mysqlPool.getConnection((err, connection) => {
              if (err) return reject(err);
              else return resolve(connection);
           });
        });
    },
    // options are array
    query: (query, options) => {
        return pool.getConnection()
           .then(connection => {
                return new Promise((resolve, reject) => {
                    connection.query(query, options, (err, rows) => {
                      if (err) return reject(err);
                      resolve(rows);
                      return connection.release();
                    });
           });
        });
    }
}

export default pool;