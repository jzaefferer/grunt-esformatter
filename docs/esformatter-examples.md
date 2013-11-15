# Usage Examples

## Format all the files in the 'src folder' with the default preset

```js
esformatter: {
  src: 'src/**/*.js'
}
```

## Format two specific files with the 'jquery' preset

```js
esformatter: {
  options: {
    preset: 'jquery'
  },
  src: ['src/parser.js', 'src/formatter.js']
}
```

## Format two sets of files with custom settings

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
