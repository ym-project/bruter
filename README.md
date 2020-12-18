# Brute force algorithm via js generator

## Install
```sh
npm install bruter
```

## Usage
#### Basic example
```js
const bruteForce = require('bruter')
const alphabet = 'abc'

for (const chars of bruteForce({alphabet})) {
	console.log(chars)

	if (chars === 'aba') {
		break
	}
}
```

#### Continue from certain position
```js
const bruteForce = require('bruter')
const alphabet = 'abc'
const from = 5

for (const chars of bruteForce({
	alphabet,
	from,
})) {
	console.log(chars)

	if (chars === 'aba') {
		break
	}
}
```

#### Brute in some range
It's useful to brute via several nodes parallel.
```js
const bruteForce = require('bruter')
const alphabet = 'abc'
const from = 5
const to = 10

for (const chars of bruteForce({
	alphabet,
	from,
	to,
})) {
	console.log(chars)

	if (chars === 'aba') {
		break
	}
}

```
