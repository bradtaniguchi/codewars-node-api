# codewars-node-api

Utility to call the codewars' [public api](https://dev.codewars.com/#introduction).

**Not affiliated with codewars**.

<img alt="npm" src="https://img.shields.io/npm/v/codewars-node-api?style=flat-square"> <img alt="license" src="https://img.shields.io/github/license/bradtaniguchi/codewars-node-api?style=flat-square"> <img alt="github workflow" src="https://img.shields.io/github/workflow/status/bradtaniguchi/codewars-node-api/on-push-workflow?style=flat-square"> <img alt="github issues" src="https://img.shields.io/github/issues/bradtaniguchi/codewars-node-api?style=flat-square">

## Installation

Using npm:

```
npm i codewars-node-api
```

Note: add `--save` if you are using npm < 5.0.0

## Example Usage

**node.js**

```js
const { CodewarsV1Api } = require('codewars-node-api');

const cwApi = new CodewarsV1Api();

const userId = 'bradtaniguchi';
cwApi.getUser(userId).then((user) => {
  console.log(user.name); // Brad
});
```

**TypeScript**

```js
import { CodewarsV1Api } from 'codewars-node-api';

const cwApi = new CodewarsV1Api();

const userId = 'bradtaniguchi';
cwApi.getUser(userId).then((user) => {
  console.log(user.name); // Brad
});
```

## Documentation

All documentation is available here:
https://bradtaniguchi.dev/codewars-node-api/

## Tooling Scripts

Below is docs on using the `tools` scripts directly by using the npm scripts. Useful for testing, or
just getting raw data directly outputted directly into stdout.

**note** all `npm run` commands can be passed the `--silent` flag to suppress the first 2 lines printed, leaving only the raw JSON data being printed out to stdout.

### get-user

Returns a single user.

```bash
npm run get:user <username | userId>
```

### get-completed-challenges

Returns the list of completed challenges for the given user. Includes pagination.

```bash
npm run get:completed-challenges <username | userId> [page = 0]
```

### get-authored-challenges

Returns a list of authored challenges made by the user.

```bash
npm run get:authored-challenges <username | userId>
```

### get-code-challenge

Returns a single code challenge.

```bash
npm run get:code-challenge <challengeId | challenge-slug>
```

## Contributing

See [CONTRIBUTING](./CONTRIBUTING.md) and review the [CODE_OF_CONDUCT](./CODE_OF_CONDUCT).

## License

See [LICENSE](./LICENSE)
