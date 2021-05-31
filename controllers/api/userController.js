const { validate } = require('express-validation')
const storeUserValidation = require('../../validations/storeUserValidate')
const apiResponse = require('../../helpers/apiResponse')
const db = require("../../models");
const User = db.user;
const auth = require("../../middleware/jwt");

// const storeUserValidation = {
//     body: Joi.object({
//         id: Joi.required(),
//         name: Joi.string().required(),
//         email: Joi.string().email().required(),
//         age: Joi.number().integer().min(0).required()
//     }),
// }

module.exports = {
  index: [
    auth,
    async function (req, res) {
      let users = await User.findAll({
        include: ["posts"],
      });
      return apiResponse(res, 200, "success", users);
    }
  ],
  store: [
    auth,
    validate(storeUserValidation, {}, {}),
    function (req, res) {
      User.create(req.body)
        .then((user) => {
          return apiResponse(res, 200, "success", user);
        })
        .catch((err) => {
          return apiResponse(res, 400, err);
        });
    }
  ],
  show: async function (req, res) {
    let user = await User.findOne({
      where: { id: req.params.id },
      include: ["posts"],
    });
    return apiResponse(res, 200, "success", user);
  }
};