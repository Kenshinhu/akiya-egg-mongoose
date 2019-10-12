'use strict';
module.exports = app => {
  class CustomerService extends app.mongooseBaseService {
    constructor(ctx) {
      super(ctx, {
        modelKey: 'Customer',
        isSoftDelete: false,
      });
    }
  }
  return CustomerService;
};
