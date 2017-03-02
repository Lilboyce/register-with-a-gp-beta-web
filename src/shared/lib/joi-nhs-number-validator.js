import Joi from 'joi';
import {validate} from 'nhs-number-validator';

const invalidNHSNumberRule = {
  name: 'nhsnumber',
  description: 'should be a valid NHS number',
  validate(params, value, state, options) {
    if (validate(value)) {
      return value;
    } else {
      return this.createError('string.nhsnumber', { v: value }, state, options);
    }
  }
};

export default {
  base: Joi.string(),
  name: 'string',
  language: {
    nhsnumber: '{{v}} must be a valid NHS Number',
  },
  pre(value, state, options) {
    if (options.convert) {
      value = value.toString();
      return value.replace(/[^0-9]/gi, '');
    }
    return value;
  },
  rules: [invalidNHSNumberRule]
};
