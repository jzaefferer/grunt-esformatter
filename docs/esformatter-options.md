# Options

## preset

Type: `String`
Default: `undefined`

Pick one of the presets that esformatter bundles. If you don't specify the option, the default preset is used.

## skipHashbang

Type: `Boolean`
Default: `false`

If you're formatting a script that contains a first line starting with "#!":
for example when you're writing scripts that are executable by themselves, set
this option to make the task remove this line before formatting it, then put it
back after formatting. Here's an example of such a script:

```bash
#!/usr/bin/env node

scriptCodeHere();
```

By default, if you format a file with esformatter that includes this line,
the parser (esprima) will throw an exception, pointing out that first line as
an "illegal token". Which makes sense in the context of browser scripts, where
the parser would throw the same error.

## indent, lineBreak, whiteSpace

Type: `Object`
Default: `undefined`

These are the top-level configuration properties for esformatter. You can specify any of the nested properties to overwrite settings from the chosen preset.

Once there is documentation available for these, a link will be added. Until then you have to look at the [esformatter source code](https://github.com/millermedeiros/esformatter/tree/master/lib).
