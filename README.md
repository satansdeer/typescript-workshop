# TypeScript - React Workshop

## Prerequisites

- Node and npm installed
- VSCode installed
- Basic React knowledge

---

## Intro

Me - Maksim, blablabla...

### What Will We Learn

- How to bootstrap an app using the typescript-react app
- What the main differences between a regular react app is
- How to use type definitions for external libraries

### What We Are Not Going To learn

- How to convert existing projects from TypeScript
- How to use all of TypeScript's features

---

## Getting started

### Install TypeScript

VScode supports TypeScript highlighting, you only need to install the TypeScript compiler.

```
npm install -g typescript
```

To verify - run

```
tsc --v
```

Let's try it out, create a file called `greet.ts`:

```ts
function greet(name: string) {
  console.log("Hello, " + name);
}

greet("Maksim");
```

```sh
tsc greet.ts

node greet.js
```

### Setup VSCode

Install prettier plugin.

Update settings:

- Editor: Format on save.

Install tslint.


## Quick Intro To Static Typing

Benefits of using TypeScript:

- Catching mistakes before running app.
- Smart editor hints.
- Allows us to define interfaces. Prevents errors in large codebases.

## References

[TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## Activities

### Make a simple counter app

[demo](https://relaxed-goldberg-269236.netlify.com/)

Create a new app using `create-react-app . --scripts-version=react-scripts-ts`.

Don't forget to create the vscode workspace.

- Drag/drop folder to VSCode.
- Open folder in VScode and press add folder to workspace.
- run `code .` in project folder.

#### Woth Noting

- tsconfig and tslint files.
- Js files became ts, JSX became TSX
- You'll have to define member access levels for class properties (private/public/protected)
- We use generics to specify props and state types. [Read about generics](https://www.typescriptlang.org/docs/handbook/generics.html)

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

### Make a magic cookie app (event.target typing)

[demo](https://peaceful-elion-614709.netlify.com/)

- React.SFC<IProps> = (props: IProps) => {}

#### Worth Noting

Since version 3.0 TypeScript has defaultProps support - [read here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
