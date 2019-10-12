'use strict';
const MongooseBaseService = Symbol('Application#MongooseBaseService');

const mongooseService = require('../../lib/mongoose');

module.exports = {
  get MongoseBaseService() {
    if (!this[MongooseBaseService]) {
      mongooseService = new mongooseService();
    }
    return this[MongooseBaseService];
  },


};
