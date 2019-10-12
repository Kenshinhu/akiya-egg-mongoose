'use strict';
const MongooseBaseService = Symbol('Application#MongooseBaseService');

const { MongooseService } = require('../../lib/mongoose');

const { mongooseModel: Model } = require('../../lib/model');
module.exports = {
  // Mongose 基础服务
  get mongooseBaseService() {
    if (!this[MongooseBaseService]) {
      this[MongooseBaseService] = MongooseService;
    }
    return this[MongooseBaseService];
  },
  mongooseModel(config = {}) {
    return Model(this.mongoose, config);
  },
};
