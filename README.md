# min-karma
Minimal Karma Runner Setup and Package

## Karma
[Karma](http://karma-runner.github.io/0.13/index.html) is a JavaScript Test Runner, one of the most popular and friendliest for beginners.

> On the AngularJS team, we rely on testing and we always seek better tools to make our life easier. That's why we created
Karma - a test runner that fits all our needs.

## Why?
- Most setups are bloated with unnecessary options.
- Start clean and minimal and extend as you go.

## Features
- Minimal functional Karma config file.
- Minimal testing example.
- Use as repository (`git clone`) or package (`npm install`). 

## Karma setup: Clone and install dependencies
```sh
git clone https://github.com/dmitriz/min-karma
npm install --save-dev
```

## Package `min-karma`: Install with `npm`
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

## Basic testing example -- inside `examples` folder
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

**Tip.** Keep your tests next to their testees for better [cohesion](https://en.wikipedia.org/wiki/Cohesion_(computer_science)). 

Enjoy!
