import UsageModel from '../model/usage-model';

export default class UsageController {

    constructor() {}

    static add(req, res, next) {
        const {list} = req.body;
        console.log(req.body);
        console.log(list);
        UsageModel.addUsage(list)
        .then(res => {
          res.status(200).send({
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