'use strict';

exports.keys = '123456';

exports.mongoose = {
  url: 'mongodb://127.0.0.1:27017/demo?authSource=dbWithUserCredentials',
  options: {
    user: 'admin',
    pass: 'admin',
    auth: {
      authSource: 'admin',
    },
    auto_reconnect: true,
    poolSize: 10,
  },
};
