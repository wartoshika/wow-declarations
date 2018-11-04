# Typescript declarations for the current live World of Warcraft LUA API

This repository has been created to use it with [qhun-transpiler](https://github.com/wartoshika/qhun-transpiler) to transpile Typescript into LUA. The declaration files should be added to your `tsconfig.json` type root section.

```json
{
    "compilerOptions": {
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": false,
        "preserveConstEnums": true,
        "target": "esnext",
        "moduleResolution": "node",
        "typeRoots": [
            "./node_modules/@types",
            "./node_modules/@wartoshika/wow-declarations"
        ]
    }
}
```