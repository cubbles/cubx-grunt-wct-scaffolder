/*
 * grunt-cubx-webpackage-upload
 *
 * Copyright (c) 2015 Hd Böhlau
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');

module.exports = function (grunt) {
  grunt.loadTasks('tasks'); // locally defined tasks

  // Project configuration.
  var workspacePath = path.join('test', 'webpackages');
  var workspaceConfigPath = path.join(workspacePath, '.workspace');
  var activeWebpackage = grunt.file.readJSON(workspaceConfigPath).activeWebpackage;
  var webpackageRelatedOptions;

  if (activeWebpackage && activeWebpackage.length > 0) {
    // Webpackage related grunt options
    webpackageRelatedOptions = {
      activeWebpackage: activeWebpackage,
      param: {
        src: path.join(workspacePath, activeWebpackage)
      }
    };
  } else {
    grunt.fail.fatal('Declared \'activeWebpackage\' NOT found or missing one of the expected files\n' +
      '* manifest.webpackage\n' +
      '* .webpackage\n' +
      'Please check ' + workspaceConfigPath + ' and the webpackage-folder.');
  }

  grunt.initConfig(webpackageRelatedOptions);
// Actually load this plugin's task(s).

  var configs = require('load-grunt-configs')(grunt, webpackageRelatedOptions);
  grunt.initConfig(configs);
};
