import InstallModel from '../model/install-model';
export default class InstallController {

    constructor() {}

    static add(req, res, next) {
        
        const {list} = req.body;
        console.log(list);
        return InstallModel.add(list)
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