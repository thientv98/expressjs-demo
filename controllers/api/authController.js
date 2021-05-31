const bcrypt = require("bcrypt")
const db = require("../../models")
const User = db.user
const apiResponse = require('../../helpers/apiResponse')
const jwt = require("jsonwebtoken")
const userRegisterValidate = require('../../validations/storeUserValidate')
const userLoginValidate = require('../../validations/userLoginValidate')
const { validate } = require('express-validation')

module.exports = {
  register: [
    validate(userRegisterValidate, {}, {}),
    function (req, res) {
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        let data = req.body;
        data.password = hash
        User.create(data)
          .then((user) => {
            return apiResponse(res, 200, "success", user);
          })
          .catch((err) => {
            return apiResponse(res, 400, err);
          });
      });
    }
  ],
  login: [
    validate(userLoginValidate, {}, {}),
    async function (req, res) {
      let user = await User.findOne({
        where: { email: req.body.email },
      });
      if (user) {
        bcrypt.compare(req.body.password, user.password, function (err, same) {
          if (same) {
            const jwtData = {
              expiresIn: process.env.JWT_TIMEOUT_DURATION,
            };
            const secret = process.env.JWT_SECRET;
            //Generated JWT token with Payload and secret.
            let token = jwt.sign({
              email: req.body.email,
              id: user.id,
            }, secret, jwtData);
            return apiResponse(res, 200, "success", {
              token: token
            });
          } else {
            return apiResponse(res, 401, "Unauthorized");
          }
        });
      }
    }
  ]
}