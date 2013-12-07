'use strict';

var grunt = require('grunt');

function generateTest(file, message) {
  return function(test) {
    test.expect(1);

    var expect = grunt.file.read('test/expected/' + file);
    var result = grunt.file.read('tmp/' + file);
    test.equal(expect, result, message);

    test.done();
  };
}

exports.esformatter = {
  'default': generateTest('default-preset.js', 'format with default preset'),
  'jquery': generateTest('jquery-preset.js', 'format with jquery preset'),
  'custom': generateTest('custom-settings.js', 'format with custom settings'),
  'script': generateTest('script.js', 'skip first line starting with #!')
};
