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
  // default: function(test) {
  //   test.expect(1);

  //   var expect = grunt.file.read('test/expected/default-preset.js');
  //   var result = grunt.file.read('tmp/default-preset.js');
  //   test.equal(expect, result, 'format with default settings');

  //   test.done();
  // },
  // jquery: function(test) {
  //   test.expect(1);

  //   var expect = grunt.file.read('test/expected/with-banner.css');
  //   var result = grunt.file.read('tmp/with-banner.css');
  //   test.equal(expect, result, 'should concat, minify and prefix banner');

  //   test.done();
  // },
  // custom: function(test) {
  //   test.expect(1);

  //   test.ok(!grunt.file.exists('tmp/idontexist.css'), 'Empty minified file should not exist');

  //   test.done();
  // },
};
