export default class UserController {

    constructor() {}

    static signin(req, res, next) {
        const {userType, id, name} = req.params;

        // save user to db
        console.log('user-controller signin');
        console.log(userType, id, name);
        res.send({
            message: "success to signin",
        })
    }

}