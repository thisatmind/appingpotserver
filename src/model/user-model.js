import pool from '../db';
import FacebookManager from '../facebook-util.js';

// @TODO have to define userType in android
const USER_TYPE = {
    ANONYMOUS: 'anonymous',
    FACEBOOK: 'facebook'
}

const model = {
    addUser: (userType, firebaseId, ...options) => {
        switch(userType){
            case USER_TYPE.ANONYMOUS:
                return model.addAnonymousUser();
            case USER_TYPE.FACEBOOK:
                return model.addFacebookUser(firebaseId, options[0], options[1]);
            default:
                break;
        }
    },
    addAnonymousUser: () => {
        
    },
    addFacebookUser: (firebaseId, facebookToken, deviceToken) => {
        return FacebookManager.getId(facebookToken)
            .then(id => {
              const query = "INSERT INTO user VALUES (?,?,?,?);";
              return pool.query(query, [firebaseId, USER_TYPE.FACEBOOK, id, deviceToken]);
            });
    }
};

export default model;