import InstallModel from '../model/install-model';
export default class InstallController {

    constructor() {}

    static add(req, res, next) {
        
        const {installedAppList} = req.body;
        
        return InstallModel.add(installedAppList)
        .then(result => {
            res.status(200).send({
                message: "success to save install",
            });
            next();
        }).
        catch(err => {
            res.status(500).send(err);
            next();
        })
        
    }

}