'use strict';

var scaffolder = require('cubx-wct-scaffolder');
module.exports = function (grunt) {
  grunt.registerTask('_generateArtifactWctScaffold', 'Generate a wct scaffold for an Artifact.', function () {
    grunt.verbose.writeln('options' + this.data.toString());
    var options = this.data;
    var webpackagePath;
    if (!options || !options.webpackagePath) {
      webpackagePath = grunt.config.get('param.src');
    } else {
      webpackagePath = options.webpackagePath;
    }
    if (!webpackagePath) {
      throw new Error('webpackagePath missed. Please defined the option webpackagePath.');
    }
    var done = this.async();
    scaffolder.scaffold(webpackagePath, done);
  });
};
