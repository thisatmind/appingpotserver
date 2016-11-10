export default class UserController {

    constructor() {}

    static signup(req, res, next) {
        const {userType, facebookToken} = req.body;

        // save user to db
        
          
        const query = "INSERT INTO user (userType, id, name) VALUES (?,?,?);";
            
        // pool.getConnection(function(err, connection){
        //     if(err) callback(err);
        //     else    callback(null, connection);
        // });
        //   connection.query( query, [params.nickname, params.email, hash], function(err, rows) {
        //     if(err) callback(err);
        //     else    callback(null, rows);
        //     connection.release();
        //   });
        
        
        console.log('user-controller signup');
        console.log(userType, facebookToken);
        res.send({
            message: "success to signup",
        })
    }

}