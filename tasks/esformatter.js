/*
 * grunt-esformatter
 *
 * Copyright (c) 2013 Jörn Zaefferer, contributors
 * Licensed under the MIT license.
 */

'use strict';

var esformatter = require('esformatter');

module.exports = function(grunt) {

  grunt.registerMultiTask('esformatter', 'Format JS files', function() {
    var customOptions = this.options({
      skipHashbang: false
    });
    try {
      var options = esformatter.rc(customOptions);
    } catch(e) {
      grunt.log.error('Exception while loading `.esformatter` options.');
      grunt.log.error(e.stack);
      return;
    }
    this.files.forEach(function(f) {
      f.src.filter(function(filepath) {
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(file) {
        var formatted, firstLine,
          content = grunt.file.read(file);
        if (options.skipHashbang) {
          firstLine = content.match(/^#!.+\n/);
          content = content.replace(firstLine, "");
        }
        try {
          formatted = esformatter.format(content, options);
        } catch(e) {
          grunt.log.error('Exception while formatting ' + file);
          grunt.log.error(e.stack);
          return;
        }
        if (options.skipHashbang && firstLine) {
          formatted = firstLine + formatted;
        }
        grunt.file.write(file, formatted);
        grunt.log.writeln('File ' + file + ' formatted.');
      });
    });
  });
};
