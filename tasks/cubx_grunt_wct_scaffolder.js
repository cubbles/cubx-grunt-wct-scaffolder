'use strict';

var scaffolder = require('cubx-wct-scaffolder');
module.exports = function (grunt) {
  grunt.registerTask('_generateArtifactWctScaffold', 'Generate a wct scaffold for an Artifact.', function () {
    var option = grunt.option('webpackagePath');
    var webpackagePath;
    if (!option) {
      webpackagePath = grunt.config.get('param.src');
    } else {
      webpackagePath = option;
    }
    if (!webpackagePath) {
      throw new Error('webpackagePath missed. Please defined the option webpackagePath.');
    }
    var done = this.async();
    scaffolder.scaffold(webpackagePath, done);
  });
};
