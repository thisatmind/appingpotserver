import model from '../model/user-model';
import FirebaseManager from '../firebase-util';

export default class UserController {

    constructor() {}

    static signup(req, res, next) {
        const {userType, firebaseId, facebookToken, deviceToken} = req.body;
       
        // save user to db
        return model.addUser(userType, firebaseId, facebookToken, deviceToken)
            .then(res => {
                res.send({
                    message: "success to signup",
                })
            })
            .catch(err => {
                res.status(500).send(err);
                next();
            });
    }

    static sendfcm(req, res, next) {
        const {userId} = req.body;
        
        return FirebaseManager.sendSpecific(userId)
            .then(res => {
                res.status(200).send({
                    "message":"message sended"
                });
                next();
            })
            .catch(err => {
                res.status(500).send(err);
                next();
            })
    }
}