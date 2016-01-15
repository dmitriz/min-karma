# min-karma
Minimal Karma runner Setup and Package --- Start testing now!

## Karma
[Karma](http://karma-runner.github.io/0.13/index.html) is a JavaScript Test Runner, one of the most popular and friendliest for beginners.

> On the AngularJS team, we rely on testing and we always seek better tools to make our life easier. That's why we created
Karma - a test runner that fits all our needs.

## Why?
- Most setups are bloated with unnecessary options and packages.
- Start clean and minimal and extend as you go.
- Install one package instead of many to get your tests up and running.

## Features
- Minimal functional Karma config file.
- Minimal testing example.
- Use as repository (`git clone`) or package (`npm install`).
- Installs all testing packages as dependencies, no need to install them manually.

## Karma setup: Clone and install dependencies
```sh
git clone https://github.com/dmitriz/min-karma
npm install --save-dev
```

## Package `min-karma` --- install with `npm`
In your main project directory (should contain `package.json`):
```sh
npm install min-karma --save
```

## Getting started
Run your tests:
```sh
karma start
```
Now try to edit files inside `examples` folder and see how karma is watching and updating your test results.

## Basic testing example --- inside `examples` folder
```js
// function to test
function add (a, b) {
	return a + b;
}

// the test
describe('Addition', function(){
	it('should add', function(){
		expect(add(2,4)).toBe(6);
		expect(add(2,4)).not.toBe(2);
	});
});
```

**Tip.** Keep your tests next to their testees for better [cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)). Avoid putting them into separate folders (like `tests`) away from your code.

Enjoy!
