'use strict';

const mock = require('egg-mock');

describe('test/akiya-egg-mongoose.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/akiya-egg-mongoose-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, akiyaEggMongoose')
      .expect(200);
  });
});
