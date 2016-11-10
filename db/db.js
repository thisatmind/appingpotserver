import mysql from 'mysql';
import config from '../config/index';

const pool = mysql.createPool({
    database: config.db.database,
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    connectionLimit: config.db.connectionLimit,
    multipleStatements: config.db.multipleStatements || false
});