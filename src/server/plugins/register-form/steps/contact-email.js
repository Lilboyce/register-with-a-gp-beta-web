import Joi from 'joi';
import {postHandlerFactory, getHandlerFactory} from './common';

const fields = [
  {id: 'email', label: 'Email', type: 'textbox'},
];

const schema = Joi.object().keys({
  'email': Joi.string().email().allow('').optional().label('Email'),
  'submit': Joi.any().optional().strip()
});

const title = 'What is your email address?';
const key = 'email';

const handlers = {
  GET: getHandlerFactory(key, fields, title, schema),
  POST: nextStep => postHandlerFactory(key, fields, title, schema, nextStep)
};

/**
 * @type Step
 */
export default {
  key,
  title,
  fields,
  schema,
  handlers
};
