[![npm version](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations.svg)](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations)

# Typescript declarations for the current live World of Warcraft LUA API

**Supported transpilers for LUA targets**:
- qhun-transpiler ([GitHub-Page](https://github.com/wartoshika/qhun-transpiler))
- TypescriptToLua ([GitHub-Page](https://github.com/TypeScriptToLua/TypeScriptToLua)) - *Thanks to tstirrat*

## Setup

Please add the wow-declarations path to your `tsconfig.json` compiler options like below:

```js
{
    "compilerOptions": {
        // ...
        "typeRoots": [
            "./node_modules/@types",
            "./node_modules/@wartoshika/wow-declarations"
        ]
    }
}
```

## Contribution

If you want to contribute, please provide a pull request and ensure that you linted your changes with `npm run lint` or try to autofix the errors with `npm run lint:fix`. I appreciate your help!