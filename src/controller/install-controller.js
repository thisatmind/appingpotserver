export default class InstallController {

    constructor() {}

    static add(req, res, next) {
        
        console.log(req.body);
        // save installed app list
        console.log('install-controller add');
        
        res.send({
            message: "success to save install",
        })
    }

}