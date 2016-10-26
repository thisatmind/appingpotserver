export default {
    env: 'development',
    secret: 'thisatmind',
    db: {
        database: 'appingpot',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        connectionLimit: 10,
        multipleStatements: false
    }
};