import Joi from "joi";

const personSchema = Joi.object({
  id: Joi.number().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

export default personSchema;
