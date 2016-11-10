import UsageModel from '../model/usage-model';

export default class UsageController {

    constructor() {}

    static add(req, res, next) {
        const {list} = req.body;
        UsageModel.addUsage(list)
        .then(res => {
          res.status(200).send({
              message: "success to save usage",
          });
          next();
        })
        .catch(err => {
          console.log(err);
          res.status(500).send(err);
          return next();
        });
    }

}