# DOjS Typescript types.

## Requirements

- Node Version 20.3.1
- NPM
- DOjS version 1.20
- DosBox (Optional for testing)

This repository is only tested in a Linux environment. For Windows use WSL

## Installation/setup

Clone the repository or fork.
On your modern machine run:

```bash
npm install
```

Create a folder `dist/dojs` and copy a installation of DOjS version to it.

Or run the `./setup.sh` to do this all for you

## How to use

To build the JS files run

```bash
npm run build
```

To generate types from the lib folder run:

```bash
npm run types
```

To run the application in Linux you can use `./run.sh` to boot up dosbox-x from flatpak.

## How it works

The typescripts definitions are created from the js files found in jsboot.zip and DOjS the JS files used for creating the documentation.

To compile the typescript to javascript we will use the the default typescript compiler.
The compile starts in `src/main.ts ` and compile everything in the folder `build`.

After that is done the files are compiled js files are modified with `jsCodeshift`.
It modifies the following things.

- in the `main.js` the line `Object.defineProperty(exports, "__esModule", { value: true });` is removed. (exports in not available in main.js)

After that all is done the files are copied to

## Known issues/improvements

- The building of the project can be improved. It just a bunch of scripts.
- p5js files are ignored in the generation, gave alot of errors.
- Some files in `jsboot` are changed from the original source.
- The file `lib/dojs/IniFile.js` function signature that gives error when compiling typescript

## Notes

Some website and packages I used to make it all work

- [DOjS](https://github.com/SuperIlu/DOjS)
- [Typescript](https://www.typescriptlang.org/)
- [jsCodeshift](https://github.com/facebook/jscodeshift)
- [Node](https://nodejs.org/en)
- [AST explorer](https://astexplorer.net/)
