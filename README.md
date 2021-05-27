# codewars-node-api

Utility to call the codewars public api.

**Not affiliated with codewars**.

## Tooling Scripts

Below is docs on using the `tools` scripts directly by using the npm scripts. Useful for testing, or
just getting raw data directly outputted directly into stdout.

**note** all `npm run` commands can be passed the `--silent` flag to suppress the first 2 lines printed, leaving only the raw JSON data being printed out to stdout.

### get-user

```bash
npm run get:user <username | userId>
```

### get-completed-challenges

```bash
npm run get:completed-challenges <username | userId> [page = 0]
```
