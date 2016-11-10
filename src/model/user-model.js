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
                return model.addFacebookUser(firebaseId, options[0]);
            default:
                break;
        }
    },
    addAnonymousUser: () => {
        
    },
    addFacebookUser: (firebaseId, facebookToken) => {
        return FacebookManager.getId(facebookToken)
            .then(id => {
              const query = "INSERT INTO user (?,?,?);";
              return pool.query(query, [firebaseId, USER_TYPE.FACEBOOK, id]);
            });
    }
};

export default model;