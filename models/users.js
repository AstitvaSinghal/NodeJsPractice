const schema = (joi) => {
  return joi
    .object()
    .keys({
      name: joi.string().required(),
      email: joi.string().email(),
      mobile: joi.string(),
      password: joi.string().required(),
      confirm_password: joi
        .string()
        .required()
        .valid(joi.ref("password"))
        .strip(),
    })
    .xor("email", "mobile");
};

module.exports = schema;
