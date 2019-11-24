[![npm version](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations.svg)](https://badge.fury.io/js/%40wartoshika%2Fwow-declarations)
[![Build Status](https://travis-ci.org/wartoshika/wow-declarations.svg?branch=master)](https://travis-ci.org/wartoshika/wow-declarations)

# Typescript declarations for the current live World of Warcraft LUA API

**Supported transpilers for LUA targets**:
- qhun-transpiler ([GitHub-Page](https://github.com/wartoshika/qhun-transpiler))
- TypescriptToLua ([GitHub-Page](https://github.com/TypeScriptToLua/TypeScriptToLua)) - *Thanks to tstirrat*

## Installation

## Setup

Installing this dependency via

- `$ npm install @wartoshika/wow-declarations@8.2.5-release.2` (npm repository installation)
- `$ npm install wartoshika/wow-declarations#v8.2.5-release.2` (github repository installation)

> I strongly recommend to use a version tag when using github based install. Referencing the master branch can result in installing a breaking change. Github based installations need a prefixing `v` in the version number!

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

## Changes

### **Nov. 24 2019 - v8.2.5-release.2**

**Breaking changes** - Incomtabible with version `v8.2.5-release.1`

- Object declarations are now namespaced and can be imported into your file. (PR #10)
- I strongly recommend using npm packages with a fix version number or referencing the version tag when installing this dependency. See [setup](#Setup).

### **Sep. 11 2019 - v8.2.5-release.1**

- Version numbers now indicates wich WoW Addon api version is supported (closes #9)

## Contribution

If you want to contribute, please provide a pull request and ensure that you linted your changes with `npm run lint` or try to autofix the errors with `npm run lint:fix`. I appreciate your help!