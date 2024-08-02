# DemoQA

# How to setup pre commit verification

## run:

- npm init @eslint/config@latest
- npm init @eslint/config@latest -- --config eslint-config-standard
- npm install --save-dev --save-exact prettier
- npm install typescript --save-dev
- npm install --save-dev husky
- npx husky init
- npm install --save-dev lint-staged

## To pre commit verify of my repo I used eslint, prettier, type-check, husky and lint-staged

### Next you need to configure files like:

- .eslintignore
- .lintstagedrc.json
- .prettier.yml
- .prettierignore
- .prettierrc.json
- eslint.config.js
- eslint.json
- tsconfig.json

### In case of how to fill files take a look into my repo

### Other step is to write scripts in package.json

```
"scripts": {
"lint": "prettier --write . && eslint --fix",
"type-check": "tsc",
"pre-commit": "lint-staged",
"prepare": "husky"
},
```

### Also there is config for husky in package.json

```
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "npm test"
    }
  },
```

### Another thing worth adding is the publication of the latest report on the GH pages

* https://marcingruszczyk.github.io/DemoQA/