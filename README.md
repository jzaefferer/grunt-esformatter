# grunt-esformatter v0.1.0 [![Build Status](https://travis-ci.org/jzaefferer/grunt-esformatter.png?branch=master)](https://travis-ci.org/jzaefferer/grunt-esformatter)

> Format JavaScript files.



## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-esformatter --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-esformatter');
```




## Esformatter task
_Run this task with the `grunt esformatter` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Files are formatted with [esformatter](https://github.com/millermedeiros/esformatter/).

### Options

#### preset

Type: `String`
Default: `undefined`

Pick one of the presets that esformatter bundles. If you don't specify the option, the default preset is used.

#### skipHashbang

Type: `Boolean`
Default: `false`

If you're formatting a script that contains a first line starting with "#!":
for example when you're writing scripts that are executable by themselves, set
this option to make the task remove this line before formatting it, then put it
back after formatting. Here's an example of such a script:

```bash
###!/usr/bin/env node

scriptCodeHere();
```

By default, if you format a file with esformatter that includes this line,
the parser (esprima) will throw an exception, pointing out that first line as
an "illegal token". Which makes sense in the context of browser scripts, where
the parser would throw the same error.

#### indent, lineBreak, whiteSpace

Type: `Object`
Default: `undefined`

These are the top-level configuration properties for esformatter. You can specify any of the nested properties to overwrite settings from the chosen preset.

Once there is documentation available for these, a link will be added. Until then you have to look at the [esformatter source code](https://github.com/millermedeiros/esformatter/tree/master/lib).

### Usage Examples

#### Format all the files in the 'src folder' with the default preset

```js
esformatter: {
  src: 'src/**/*.js'
}
```

#### Format two specific files with the 'jquery' preset

```js
esformatter: {
  options: {
    preset: 'jquery'
  },
  src: ['src/parser.js', 'src/formatter.js']
}
```

#### Format two sets of files with custom settings

```js
cssmin: {
  four_space_indent: {
    options: {
      indent: {
        value: '    '
      }
    },
    src: 'file1.js'
  },
  jquery_two_space_indent: {
    options: {
      preset: 'jquery'
      indent: {
        value: '  '
      }
    },
    src: 'vendor/*.js'
  }
}
```


## Release History

 * 2012-11-15   v0.1.0   First release

---

Task submitted by [Jörn Zaefferer](http://bassistance.de)

*This file was generated on Sat Dec 07 2013 17:07:50.*
