# min-karma 
Minimal Karma runner *Setup* and [*Package*](https://www.npmjs.com/package/min-karma) &mdash; Start testing now!

[![npm version](https://badge.fury.io/js/min-karma.svg)](https://badge.fury.io/js/min-karma) [![Build Status](https://travis-ci.org/dmitriz/min-karma.svg?branch=master)](https://travis-ci.org/dmitriz/min-karma) [![bitHound Code](https://www.bithound.io/github/dmitriz/min-karma/badges/code.svg)](https://www.bithound.io/github/dmitriz/min-karma) [![Code Climate](https://codeclimate.com/github/dmitriz/min-karma/badges/gpa.svg)](https://codeclimate.com/github/dmitriz/min-karma) [![Dependency Status](https://david-dm.org/dmitriz/min-karma.svg)](https://david-dm.org/dmitriz/min-karma) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![npm downloads](https://img.shields.io/npm/dm/min-karma.svg?style=flat-square)](https://www.npmjs.com/package/min-karma)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Karma
[Karma](http://karma-runner.github.io/0.13/index.html) is a JavaScript Test Runner, one of the most popular and friendliest for beginners. The most notable advantage of Karma is *testing in real browsers*. [See my StackOverflow answer for more information about Karma usage.](http://stackoverflow.com/a/29619467/1614973)

> On the [AngularJS](https://angularjs.org/) team, we rely on testing and we always seek better tools to make our life easier. That's why we created
Karma - a test runner that fits all our needs.


## Why?
- Many setups are bloated with unnecessary options and packages.
- Start clean and minimal and extend as you go.
- Add single package to your project instead of many, to get your tests up and running.


## Use cases
- You have a project and want to add unit/integration/whatever tests &mdash; [install the package](#to-use-as-package-add-to-your-project).
- You want to quickly evaluate Karma runner and play with in a clean folder &mdash; [clone or download the repository](#to-use-as-separate-repository).


## Features
- Minimal functional Karma config file.
- Use as *repository* (`git clone`) or *package* (`npm install`).
- Installs all testing packages as dependencies, no need to install them manually.
- Includes Chrome and Firefox launchers ([but many other browsers are also supported](https://karma-runner.github.io/latest/config/browsers.html)).
- Automatically and gracefully (without overwriting) copied to your project directory via [`gently-copy`](https://github.com/dmitriz/gently-copy):
  - Basic testing example inside `demo` folder.
  - Minimal functional configuration file `karma.conf.js` (will not install if `karma.conf.js` is already present):

    ```js
    module.exports = function (config) {
      config.set({
        frameworks: ['jasmine'],
        files: [
          'demo/**/*.js'
        ],
        browsers: ['Chrome']
      })
    }
    ```


## If you are new to Node
[Download and Install Node.js](https://nodejs.org/download/), see [How do I get started with Node.js](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js) for more information.


## To use as separate Repository: 
### Clone
```sh
git clone https://github.com/dmitriz/min-karma
```
or simply [Download this Repository](https://github.com/dmitriz/min-karma/archive/master.zip),
unzip it and `cd min-karma-master`.


### Install dependencies
```sh
npm install --save-dev
```


## To use as Package (add to your project):
In your main project directory (should contain `package.json`):
```sh
npm install min-karma --save
```


## Getting started
Run your tests:
```sh
karma start
```
Now try to edit files inside `demo` folder and see how karma is watching and updating your test results.


## Basic testing demo &mdash; inside `demo` folder
```js
// function to test
function add (a, b) {
  return a + b
}

// the test
describe('Addition', function () {
  it('should add numbers', function () {
    expect(add(2, 4)).toBe(6)
    expect(add(2, 4)).not.toBe(2)
  })
})
```

**Tip.** Keep your tests next to their testees for better [cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)). Avoid putting them into separate folders (like `tests`) away from your code.

Enjoy!
