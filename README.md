# cubx-grunt-wct-scaffolder

Grunt integration for generate the scaffold of wct unit tests for cubbles components. This is a wrapper for the cubx-wct-scaffolder package.
This grunt plugin was developed for usage in cubbles projects in cubbles-coder-devtools.


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install cubx-grunt-wct-scaffolder --save-dev


Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('cubx-grunt-wct-scaffolder');

## Usage
This grunt plugin is created for usage in cubbles-coder-devtools.

### Configuration

    ..
    '_generateArtifactWctTScaffold': [
      all: {
        options: {
          webpackagePath: <webpacakgePath>
        }
      }
    }

In cubbles-coder-devtools is the configruation not necessary, because the default value of webapckagePath is the config paramater `param.src`, wich is the path to the active webpacakge.

[npm-image]: https://img.shields.io/npm/v/cubx-grunt-wct-scaffolder.svg?style=flat
[npm-url]: https://npmjs.org/package/cubx-grunt-wct-scaffolder
