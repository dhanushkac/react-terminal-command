# [React Terminal Command](https://react-terminal-command.netlify.app/)

> A customizable terminal command viewer in React. 🚀

[![NPM](https://img.shields.io/npm/v/react-terminal-command.svg)](https://www.npmjs.com/package/react-terminal-command)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

Using yarn

```bash
yarn add react-terminal-command
```

Using npm

```bash
npm install react-terminal-command
```

## Basic Usage

```tsx
import React from 'react'

import ReactTerminalCommand from 'react-terminal-command'

const Example = () => {
  return <ReactTerminalCommand command='yarn install react-terminal-command' />
}
```

## Advanced Usage

```tsx
import React from 'react'

import ReactTerminalCommand from 'react-terminal-command'

const Example = () => {
  return (
    <ReactTerminalCommand
      command='yarn install react-terminal-command'
      color='#d40188'
      withDark
    />
  )
}
```

### Additional Info

- _React Terminal Command_ is **container-width-preffered**. Use container width based on your application preference.
- `color` prop supports both 6 digit and 3 digit hex codes. If your props has an issue default _red_ will be used and console will display an error below.

```bash
⛔️ Invalid hex color code provided. Default will be used.
```

## Features

- Switchable dark mode and light mode
- Command copy option
- Container preffered width
- Several command colors to choose from

## Props

| Name     | Type    | Description                                            |
| :------- | :------ | :----------------------------------------------------- |
| command  | String  | **Required.** The command to display.                  |
| withDark | boolean | Enable/Disable dark mode. Default: false               |
| color    | String  | Primary color for terminal command. Default: `#ff0000` |

## Contribute

1. Submit an issue
2. Fork the repository
3. Create a dedicated branch (never ever work in master)
4. The first time, run command: `yarn` or `npm install` into the directory
5. Run `yarn run build` or `npm run build`
6. Link lib locally with `yarn link` or `npm link`
7. Fix bugs or implement features
8. Always write tests

## Run Library

Using yarn

```bash
yarn start
```

using npm

```bash
npm start
```

Application build will be triggered in watch moode.

## Run Tests

Using yarn

```bash
yarn test:watch
```

Using npm

```bash
npm test:watch
```

## License

MIT © [dhanushkac](https://github.com/dhanushkac)

## Related Projects

Angular Terminal Command - coming soon

Vue Terminal Command - coming soon
