'use strict';
var will = require('willy').will,
  app = require('../app');

describe('version', function () {
  it('should be 0.0.1', function () {
    will(app.version).be('0.0.1');
  });
});
