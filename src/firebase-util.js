import config from '../config/index'
import request from 'request-promise';

const FIREBASE_FCM_URL = 'https://fcm.googleapis.com/fcm/send';
const FIREBASE_APP_KEY = process.env.FIREBASE_APP_KEY || config.FIREBASE_APP_KEY;
const FirebaseManager = {
    
    sendSpecific: (userId, title, body, data) => {
        return request({
            method: 'POST',
            uri: FIREBASE_FCM_URL,
            headers: {
                'Content-Type' :' application/json',
                'Authorization':`key=${FIREBASE_APP_KEY}`
            },
            body: {
                "notification" : {
                    title,
                    body
                },
                data,
                "to": userId
            },
            json: true
        })
    }
//     https://fcm.googleapis.com/fcm/send
// Content-Type:application/json
// Authorization:key=AIzaSyZ-1u...0GBYzPu7Udno5aA

// { "data": {
//     "score": "5x1",
//     "time": "15:10"
//   },
//   "to" : "bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1..."
// }

};

export default FirebaseManager;