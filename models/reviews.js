const schema = (joi) => {
  return joi.object().keys({
    name: joi.string().required(),
    email: joi.string().email(),
    movie_id: joi.string().required(),
    text: joi.string(),
    date: joi.date().timestamp(),
  });
};

module.exports = schema;
