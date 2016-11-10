import model from '../model/user-model';

export default class UserController {

    constructor() {}

    static signup(req, res, next) {
        const {userType, firebaseId, facebookToken} = req.body;
       
        // save user to db
        return model.addUser(userType, firebaseId, facebookToken)
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

}