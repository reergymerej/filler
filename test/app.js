'use strict';

var will = require('willy').will,
  app = require('../app');

var path = require('path'),
  fs = require('fs'),
  files = [];

describe('version', function () {
  it('should be 0.0.1', function () {
    will(app.version).be('0.0.1');
  });
});

describe('main', function () {
  var dirPath;

  before(function () {
    // setup an environment in which the app will run
    dirPath = path.join(__dirname, 'playground');
    fs.mkdirSync(dirPath);
    files.push({ path: dirPath, dir: true });

    fs.writeFileSync(path.join(dirPath, '.fillerrc'), JSON.stringify({
      hello: 'dude'
    }));

    files.push({ path: path.join(dirPath, '.fillerrc'), dir: false });
  });

  after(function () {
    // remove all the stuff we made for testing
    files.reverse().forEach(function (file) {
      if (file.dir) {
        fs.rmdirSync(file.path);
      } else {
        fs.unlinkSync(file.path);
      }
    });
  });

  it('should read the config file for options', function () {

  });
});
