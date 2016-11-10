import UsageModel from '../model/usage-model';

export default class UsageController {

    constructor() {}

    static add(req, res, next) {
        const {list} = req.body;
        UsageModel.addUsage(list)
        .then(res => {
          res.send({
              message: "success to save usage",
          });
          next();
        })
        .catch(err => {
          res.status(500).send(err);
          return next();
        });
    }

}