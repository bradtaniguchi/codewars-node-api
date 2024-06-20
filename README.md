# codewars-node-api

Utility to call the codewars' [public api](https://dev.codewars.com/#introduction) from nodejs.

**Not affiliated with codewars**.

<img alt="npm" src="https://img.shields.io/npm/v/codewars-node-api?style=flat-square">
<img alt="license" src="https://img.shields.io/github/license/bradtaniguchi/codewars-node-api?style=flat-square">
<img alt="github workflow" src="https://img.shields.io/github/workflow/status/bradtaniguchi/codewars-node-api/on-push-workflow?style=flat-square">
<img alt="github issues" src="https://img.shields.io/github/issues/bradtaniguchi/codewars-node-api?style=flat-square">

## Installation

Using npm:

```bash
npm i codewars-node-api
```

Note: add `--save` if you are using npm < 5.0.0

## Example Usage

### node.js

```js
const { CodewarsV1Api } = require('codewars-node-api');

const cwApi = new CodewarsV1Api();

const userId = 'bradtaniguchi';
cwApi.getUser(userId).then((user) => {
  console.log(user.name); // Brad
});
```

### TypeScript/esm

```ts
import { CodewarsV1Api } from 'codewars-node-api';

const cwApi = new CodewarsV1Api();

const userId = 'bradtaniguchi';
cwApi.getUser(userId).then((user) => {
  console.log(user.name); // Brad
});
```

## Documentation

All code documentation is available here:
<https://bradtaniguchi.dev/codewars-node-api/>

## CLI

This package comes with a CLI interface that can be used to interact with the API directly from your terminal.
This could be useful as a quick reference, or working with other command-line tools.

### Usage

```bash
codewars-node-cli help
```

### Getting user example

```bash
codewars-node-cli user get bradtaniguchi
```

### Getting authored challenges by user example

```bash
codewars-node-cli challenges authored bradtaniguchi
```

### Getting completed challenges by user example

```bash
codewars-node-cli challenges completed bradtaniguchi
```

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) and review the [CODE_OF_CONDUCT](./CODE_OF_CONDUCT).

## License

See [LICENSE](./LICENSE)
