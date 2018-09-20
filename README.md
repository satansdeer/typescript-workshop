# Typescript - React Workshop

## Prerequisites

- Node and npm installed
- VSCode installed
- Basic React knowledge

---

## Intro

Me - Maksim, blablabla...

## What Will We Learn

- How to bootstrap typescript-react app
- What are main differences from regular react app
- How to use type definitions for external libraries

## What Are We Not Going To learn

- How to convert existing project from typescript
- We are not going to cover all the Typescript features

## Install Typescript

VScode supports typescript highlighting, you only need to install the typescript compiler.

```
npm install -g typescript
```

To verify - run

```
tsc --v
```

Let's try it out, create file `greet.ts`:

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

## Setup VSCode

Install prettier plugin.

Update settings:

- Editor: Format on save.

Install tslint.

## Quick Intro To Static Typing

Benefits of using typescript:

- Catching mistakes before running app.
- Smart editor hints.
- Allows to define interfaces. Prevents errors on large codebases.

## Reference

[Typescript Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

## ACTIVITY: Make simple counter app

[demo](https://relaxed-goldberg-269236.netlify.com/)

Create new app using `create-react-app . --scripts-version=react-scripts-ts`.

Don't forget to create vscode workspace.

- Drag/drop folder to VSCode.
- Open folder in VScode and press add folder to workspace.
- run `code .` in project folder.

### Things To Note

- tsconfig and tslint files.
- Js files became ts, JSX became TSX
- You'll have to define member access levels for class properties (private/public/protected)
- We use generics to specify props and state types. [Read about generics](https://www.typescriptlang.org/docs/handbook/generics.html)

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

## ACTIVITY: Make a magic cookie app (event.target typing)

[demo](https://peaceful-elion-614709.netlify.com/)

- React.SFC<IProps> = (props: IProps) => {}

## Worth Noting

Since version 3.0 Typescript has defaultProps support - [read here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
