# env-dep

Alias dependencies according to your env variables

## Usage

Add an `envDependencies` key to your `package.json`.
It should look something like this:

```json
{
  ...
  "dependencies": {
    "foo-dev": "npm:foo@latest",
    "foo-prod": "npm:foo@1.1.0"
  },
  "envDependencies": {
    "foo": {
      "_": "foo-prod",
      "development": "foo-dev"
    }
  }
  ...
}
```

Then, in your `index.js` make sure to register this library:

```js
require("env-dep/register");
const foo = require("foo"); // This is either foo-dev if NODE_ENV is development, or foo-prod otherwise
```
