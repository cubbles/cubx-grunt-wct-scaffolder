'use strict';

const scaffolder = require('cubx-wct-scaffolder');
module.exports = function (grunt) {
  grunt.registerTask('_generateArtifactWctScaffold', 'Generate a wct scaffold for an Artifact.', function () {
    const webpackagePath = grunt.config.get('param.src');

    if (!webpackagePath) {
      throw new Error('webpackagePath missed. Please defined the option webpackagePath.');
    }
    const done = this.async();
    scaffolder.scaffold(webpackagePath, done);
  });
};
