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
    // const { mongoose } = this;
    const { akiyaEggMongoose } = this.config;
    const { clientId, isMultiConn = false } = akiyaEggMongoose;

    const mongodb = isMultiConn ? this.mongooseDB.get(config.clientId || clientId) : this.mongoose;
    return Model({
      Schema: this.mongoose.Schema,
      mongoose: mongodb,
    }, {
      ...akiyaEggMongoose,
      ...config,
    });
  },
};
