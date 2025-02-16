# Contributing

## Installation

Clone the repository.

```bash
git clone git@github.com:bradtaniguchi/codewars-node-api.git
cd codewars-node-api
```

Install required Node.js version in your machine as mentioned in .nvmrc

or

If you have [nvm](https://dev.codewars.com/#introduction) installed, run the command

```bash
nvm use
```

Install the dependencies

```bash
npm install
```

## Summary

Contributing to this library can be done using any environment of your choice. Currently development is focused on using node.js, further details are on the way.
Anyone can currently do the following:

- open issues for features or bugs
- open pull request(s) for existing issues
- update documentation for this project

Direct contributions to the code **require opening an issue first to discuss the feature**, since the project is still a work in progress.

## Linting the code

To lint the code use the command:

```bash
npm run lint
```

## Building code

To build the code use the command:

```bash
npm run build
```

This will create a `lib` folder, which will house the exported js and .d.ts files.

## Building docs

To build the [typedoc](https://www.npmjs.com/package/typedoc) based doc site, use the command:

```bash
npm run build:docs
```

To serve the docs locally you can use:

```bash
npm run smoke:docs
```

### Alternatively serve docs

To help with typedoc writing, use the following commands between two different
terminals:

```bash
npm run dev:docs
```

```bash
npm run smoke:docs
```

The first will run the typedoc compilation server, and watch for changes. While the
second will serve the docs using `http-server`.

## Running sanity tests

Currently we use [jest](https://jestjs.io/docs/getting-started) to run some sanity checks
against the actual code and API calls. These **do not** need to be ran locally, as the github-actions
pipelines will check them automatically during PR review.

```bash
npm run test
```

## Cleaning up

Anytime you build anything the codebase will create static files that are not tracked by git. These can be cleaned
up using the following command:

```bash
npm run clean
```

## Creating new release

(for maintainers only)

Releases are handled by github and published to [npm](https://www.npmjs.com/package/codewars-node-api).
To create a new release, create a new tag via `npm version <major|minor|patch>`

Then push the tag/changes to github via `git push --tags`.

Once this is pushed, then create a new release on github, and publish the release notes.

## External Resources

Below is the official api docs, which this api is based off of. This could be subject to change.
<https://dev.codewars.com/#introduction>

## Have Questions?

Feel free to open an issue asking for help/support [here](https://github.com/bradtaniguchi/codewars-node-api/issues)
