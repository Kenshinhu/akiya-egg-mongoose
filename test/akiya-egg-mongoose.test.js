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

  it('should POST /', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/customer')
      .send({ name: 'john' })
      .set('Accept', 'application/json')
      .expect(200);
  });
});
