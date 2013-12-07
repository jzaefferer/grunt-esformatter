/*
 * grunt-esformatter
 *
 * Copyright (c) 2013 Jörn Zaefferer, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      test: ['tmp']
    },

    copy: {
      'tmp/default-preset.js': 'test/fixtures/shared.js',
      'tmp/jquery-preset.js': 'test/fixtures/shared.js',
      'tmp/custom-settings.js': 'test/fixtures/shared.js',
      'tmp/script.js': 'test/fixtures/script.js'
    },

    esformatter: {
      'default-preset': 'tmp/default-preset.js',
      'jquery-preset': {
        options: {
          preset: 'jquery'
        },
        src: 'tmp/jquery-preset.js'
      },
      'custom-settings': {
        options: {
          indent: {
            value: '    '
          }
        },
        src: 'tmp/custom-settings.js'
      },
      'script': {
        options: {
          skipHashbang: true
        },
        src: 'tmp/script.js'
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Remove tmp, copy files to format, format them, verify the result
  grunt.registerTask('test', ['clean', 'copy', 'esformatter', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};
