import model from '../model/user-model';
import FirebaseManager from '../firebase-util';

export default class UserController {

    constructor() {}

    static signup(req, res, next) {
        const {userType, firebaseId, facebookToken, deviceToken} = req.body;
       console.log(req.body);
        // save user to db
        return model.addUser(userType, firebaseId, facebookToken, deviceToken)
            .then(result => {
                res.send({
                    message: "success to signup",
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
                next();
            });
    }

    static sendfcm(req, res, next) {
        const {userId} = req.body;
        
        return FirebaseManager.sendSpecific(userId)
            .then(result => {
                res.status(200).send(result);
                next();
            })
            .catch(err => {
                res.status(500).send(err);
                next();
            })
    }
    
    static updateDeviceToken(req, res, next) {
        const {userId, deviceToken} = req.body;
        
        return model.updateUser(userId, deviceToken)
            .then(result => {
                res.send({
                    message: "success to update firebase device token"
                });
                next();
            })
            .catch(err => {
                res.status(500).send(err);
                next();
            })
    }
}