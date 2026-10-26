# WebdriverIO ESLint Configuration

> ESLint configurations for WebdriverIO projects

> [!NOTE]
> This package is meant for internal usage only within the WebdriverIO ecosystem. However if you find this package useful, feel free to use it.
> If you are looking for ESLint rules intended for users of WebdriverIO, see [`eslint-plugin-wdio`](https://www.npmjs.com/package/eslint-plugin-wdio).

## Install

This package can be installed via:

```sh
npm i --save-dev @wdio/eslint
```

## Setup

Create a `eslint.config.mjs` file in the root of your repository, containing the following:

```js
import wdioEslint from '@wdio/eslint'

export default wdioEslint.config(
    [
        // your custom project configuration
    ]
);
```

---

For more information on WebdriverIO see the [homepage](https://webdriver.io).
