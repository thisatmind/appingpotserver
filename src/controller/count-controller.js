import CountModel from '../model/count-model';

export default class CountController {

    constructor() {}

    static add(req, res, next) {
        const {list} = req.body;
        CountModel.addCount(list)
        .then(result => {
          res.status(200).send({
              message: "success to save count",
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