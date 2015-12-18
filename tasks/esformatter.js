/*
 * grunt-esformatter
 *
 * Copyright (c) 2013 Jörn Zaefferer, contributors
 * Licensed under the MIT license.
 */

'use strict';

var esformatter = require('esformatter'),
  path = require('path'),
  _ = require('underscore');

module.exports = function(grunt) {

  grunt.registerMultiTask('esformatter', 'Format JS files', function() {
    var options = this.options({
      skipHashbang: false
    });
    // read options.config file, and merge with options object.
    // then delete config key from options.
    if (options.config) {
      var configFilePath = path.resolve(options.config);
      var configfile = require(configFilePath);
      options = _.defaults(options, configfile);
      delete options.config;
    }
    // read the .esformatter files recursively
    options = esformatter.rc(options);
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
