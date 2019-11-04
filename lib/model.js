'use strict';
require('moment-timezone');
const moment = require('moment');
const mongooseModel = ({ Schema, mongoose: mongooseInstance }, config = {}) => {
  const mongoose = mongooseInstance;

  const {
    modelName,
    props,
    pre_save,
    index,
    virtual = {},
    method = {},
    options = {},
  } = config;

  const baseModel = new Schema(Object.assign(props, {
    _deleteAt: {
      type: Number,
      default: 0,
    },
  }), Object.assign({
    collection: modelName, // 默认使用 modelName 作为 collection 名
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  }, options));

  if (pre_save) {
    baseModel.pre('save', pre_save);
  }

  if (index) {
    baseModel.index(...index);
  }

  Object.keys(method).forEach(k => { baseModel.method(k, method[k]); });

  Object.keys(virtual).forEach(k => {
    const { get, set, ...virtualProps } = virtual[k];
    const virtualType = baseModel.virtual(k, virtualProps);
    if (get) { virtualType.get(get); }
    if (set) { virtualType.set(set); }
  });

  baseModel.set('toJSON', {
    getters: true,
    virtuals: true,
    minimize: false,
    transform: (doc, obj) => {
      obj.objectId = obj._id;
      delete obj._deleteAt;
      delete obj.__v;
      delete obj._id;
      delete obj.id;
      obj.createdAt = moment(obj.createdAt).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm');
      obj.updatedAt = moment(obj.updatedAt).tz('Asia/Shanghai').format('YYYY-MM-DD HH:mm');
      return obj;
    },
  });

  // const
  return mongoose.model(modelName, baseModel);
};


exports.mongooseModel = mongooseModel;
