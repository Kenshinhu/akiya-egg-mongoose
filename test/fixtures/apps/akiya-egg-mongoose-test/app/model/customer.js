'use strict';
module.exports = app => (app.mongooseModel.call(app, {
  modelName: 'Customer',
  props: {
    name: String,
  },
}));
