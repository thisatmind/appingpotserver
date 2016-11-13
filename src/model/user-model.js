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
      console.log(firebaseId);
      console.log(facebookToken);
      console.log(deviceToken);
      return FacebookManager.getId(facebookToken)
          .then(id => {
            const query = "INSERT INTO user VALUES (?,?,?,?);";
            return pool.query(query, [firebaseId, USER_TYPE.FACEBOOK, id, deviceToken]);
          })
          .then(() => {
            return FacebookManager.getProfile(facebookToken);
          })
          .then(profile => {
            const {id, birthday, gender, friends} = profile;
            console.log(friends);
            const query = "INSERT INTO facebook VALUES (?,?,?);";
            return pool.query(query, [id, birthday, gender]);
          });
    },
    updateUser: (userId, deviceToken) => {
      const query = "UPDATE user SET deviceToken = ? WHERE id = ?;"
      return pool.query(query, [userId, deviceToken]);
    }
};

export default model;