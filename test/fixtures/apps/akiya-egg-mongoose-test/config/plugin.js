'use strict';
const path = require('path');
/** @type Egg.EggPlugin */
module.exports = {
  // Mongoose Plugin
  mongoose: {
    enable: true,
    package: 'egg-mongoose',
  },

  akiyaMongoose: {
    enable: true,
    path: path.join(__dirname, '../../../../../app'),
  },

};
