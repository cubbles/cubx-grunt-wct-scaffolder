'use strict';

var scaffolder = require('cubx-wct-scaffolder');
module.exports = function (grunt) {
  grunt.registerMultiTask('_generateArtifactWctScaffold', 'Generate a wct scaffold for an Artifact.', function () {
    var data = this.data;
    var webpackagePath;
    if (data && data.options && data.options.webpackagePath) {
      webpackagePath = data.options.webpackagePath;
    } else {
      webpackagePath = grunt.config.get('param.src');
    }
    if (!webpackagePath) {
      throw new Error('webpackagePath missed. Please defined the option webpackagePath.');
    }
    var done = this.async();
    scaffolder.scaffold(webpackagePath, done);
  });
};
