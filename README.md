# eslint-plugin-shiny

Shiny eslint plugin with various rules to restrict
development process.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-shiny`:

```
$ npm install eslint-plugin-shiny --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-shiny` globally.

## Usage

Add `shiny` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "shiny"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "shiny/rule-name": 2
    }
}
```

## Supported Rules

* `no-index-import` Restricts user from writing
```javascript
import { Heading } from '@allershiny';
```





