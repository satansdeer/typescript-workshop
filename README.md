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
- What are key differences between a regular react app and typescript app.
- How to use type definitions for external libraries.

### What We Are Not Going To learn

- How to convert existing projects from TypeScript
- How to use all of TypeScript's features

---

## Getting Started

### Install TypeScript

VScode supports TypeScript highlighting, you only need to install the TypeScript compiler.

```
npm install -g typescript
```

To verify - run

```
tsc --v
```

### Try TypeScript

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

### Make A Sample App

Create a new app using `npx create-react-app <app-name> --scripts-version=react-scripts-ts`.

Don't forget to create the vscode workspace.

- Drag/drop folder to VSCode.
- Open folder in VScode and press add folder to workspace.
- Run `code .` in project folder.

#### Worth Noting

- `tsconfig.json` and `tslint.json` files.
- `js` files became `ts`, `JSX` became `TSX`
- You'll have to define member access levels for class properties (`private | public | protected`)
- We use generics to specify props and state types. [Read about generics](https://www.typescriptlang.org/docs/handbook/generics.html)

```ts
function identity<T>(arg: T): T {
  return arg;
}
```

### Make a simple counter app

[Counter App Demo](https://relaxed-goldberg-269236.netlify.com/)

Open folder `./simple-counter-exercise`.

#### TODO

- [ ] Define the ICounterProps interface. It should include the `state` field of type `number`
- [ ] Set proper visibility levels for class properties `public | protected | private`

### Make A Magic Cookie App

[Magic Cookie App Demo](https://peaceful-elion-614709.netlify.com/)

Open folder `./fortune-cookie-exercise`.

#### TODO

- [ ] `App.tsx`

  - [ ] Define and use the `IFortuneCookieState`. It should have a `string` attribute `randomFortune` and `fortuneCookies` list as `array` of `strings`.
  - [ ] Add proper member visibility types to App methods.

- [ ] `CreateFortuneCookie.tsx`

  - [ ] Implement "IFortuneCookieProps" interface. It should accept `onAddFortuneCookie` function.
  - [ ] Implement `IFortuneCookieState`. It should have `string` field `cookieText`.
  - [ ] Add proper member visibility types to `CreateFortuneCookie` methods.

- [ ] `FortuneCookieText.tsx`

  - [ ] Define the `IFortuneCookieTextProps`. It should have the `text` field of `string` type.
  - [ ] Define the `FortuneCookieText` stateless functional component with following layout

  ```html
    <div className="cookie-wrapper">
      <div className={`cookie-image ${text ? "is-open" : ""}`}>
        <div className="cookie-paper">{text}</div>
      </div>
    </div>
  ```

  Example stateless functional component:

  ```typescript
  const example: React.SFC<IProps> = (props: IProps) => {};
  ```

## Worth Noting

Since version 3.0 TypeScript has defaultProps support - [read here](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
