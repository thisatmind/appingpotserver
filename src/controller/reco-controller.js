import RecoModel from '../model/reco-model';
import FirebaseManager from '../firebase-util';
import uuid from 'uuid4';

const RECO_TITLE = "오늘의 추천 앱이 도착하였습니다.";
const RECO_BODY = "알림을 눌러 확인하세요!";

export default class RecoController {

    constructor() {}
    
    static send(req, res, next) {
        const {list} = req.body;
        
        list.map(data => {
            data.recoId = uuid();
        });
        
        RecoModel.addReco(list)
          .then(result => {
            return Promise.all(list.map(data => {
                const payload = {
                   id: data.recoId,
                   packageName: data.packageName,
                   icon: data.icon,
                   marketUrl: data.marketUrl,
                   title: data.title
                };
                return FirebaseManager.sendSpecific(data.deviceToken, RECO_TITLE, RECO_BODY, payload);
            }));
          })
          .then(pushResult => {
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