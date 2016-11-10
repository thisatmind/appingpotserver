export default class UsageController {

    constructor() {}

    static add(req, res, next) {
        const {userType, id, name} = req.body;
        console.log(req.body);
        /*
            id : String
            userId: String
            installedAppId : 
            dailyUsageTime : sec * 24 string
            dailyCount : 
            createdDate
        */
        // save usage to db
        console.log('usage-controller signin');

        res.send({
            message: "success to save usage",
        })
    }

}