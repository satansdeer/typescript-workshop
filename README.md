# Typescript - React Workshop

## Prerequisites

* Node and npm installed
* VSCode installed

---

## Intro (about me, what we are going to learn)

Me - Maksim, blablabla...

## ACTIVITY: Setup VSCode and Typescript

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
    return "Hello, " + name;
}

greet('Maksim')
```

```sh
tsc greet.ts

node greet.js
```

## Tsconfig

Given no arguments, tsc will first check `tsconfig.json` for instructions. When it finds the config, it uses those settings to build the project.

Create file `tsconfig.json`

```
{
  "compilerOptions": {
    "target": "es6",
    "jsx": "react",
    "module": "commonjs"
  },
  "exclude": [
    "node_modules"
  ]
}
```

In the compiler options, a target of es6 has been set. This means that the JavaScript engine target will be set to es6, and the module will be set to CommonJS. Notice that there is also a key called JSX which is set to react. This Tells typescript to compile jsx files as react files. This is similar to running tsc — jsx react .

## Quick Intro To Static Typing

## ACTIVITY: Make simple counter app

## Learn About Typescript And React

`import * as React from "react";` - how to make it `import React from 'react'` again.

## Learn about generics

## ACTIVITY: Make a magic cookie app (event.target typing)

-------

* tsx - for jsx

* import * as React from 'react'
* import * as ReactDOM from 'react-dom'

* React.SFC<IProps> = (props: IProps) => {}

* default props 

* class component - has state

