typeguards
==========

Everyday use typeguards for your JavaScript and TypeScript codebase

# 🎉 Features

This library grants you a list of typeguards functions to check if certain data are of a certain type

# ⚙ Install

```bash
# npm
npm i typeguards

# yarn
yarn add typeguards
```

# 📖 Docs

You can read docs [here](./docs/README.md), just remember to run your `npm run docs` script.

# 🔍 Usage

```typescript
// maybe-a-hello-world.ts

export default function maybeAnHelloWorld() {
  console.log('hello world');
}

// app.ts
import * as guards from 'typeguards';
import maybeAnHelloWorld from './maybe-a-hello-world';

if (guards.isFunction(maybeAnHelloWorld)) {
  maybeAnHelloWorld(); // logs hello world
}
```

# ️❤️ Contributing

Every contribution is really welcome!

If you feel that something can be improved or should be fixed, feel free to open an issue with the feature or the bug found.

If you want to fork and open a pull request (adding features or fixes), feel free to do it. Remember only to use the `dev` branch as a base.

Read the [contributing guidelines](./CONTRIBUTING.md)

# 📃 Licence

Read the [licence](./LICENCE)
