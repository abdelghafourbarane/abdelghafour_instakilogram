import User from "../models/User.js";

export const createUser = (userInfos, cb) => {
  //   check the db to find a User whith the userInfos.id
  User.findOne({ facebook_id: userInfos.id }, (err, user) => {
    if (err) {
      console.log("errorMessage: ", err);
    }
    if (user) {
      cb(null, user); //login if user already exists
    } else {
      user = new User({
        facebook_id: userInfos.id,
        username: userInfos.short_name,
        firstName: userInfos.name.givenName,
        lastName: userInfos.name.familyName,
      });
      user.save((err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("saving user ...");
          cb(null, user);
        }
      });
    }
  });
};
