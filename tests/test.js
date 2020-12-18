const test = require('ava')
const brute = require('../src')

test('check alphabet string option', t => {
	const alphabet = 'ab'
	const expectedIterationsNumber = 6
	let counter = 0

	/* eslint-disable no-unused-vars */
	for (const _ of brute({alphabet})) {
		counter++
	}

	t.is(counter, expectedIterationsNumber)
})

test('check alphabet array option', t => {
	const alphabet = [
		'a',
		'b',
	]
	const expectedIterationsNumber = 6
	let counter = 0

	/* eslint-disable no-unused-vars */
	for (const _ of brute({alphabet})) {
		counter++
	}

	t.is(counter, expectedIterationsNumber)
})

test('check from option', t => {
	const alphabet = 'ab'
	const from = 4
	const expectedValues = [
		'ab',
		'ba',
		'bb',
	]
	const values = []
	const generator = brute({
		alphabet,
		from,
	})

	for (const chars of generator) {
		values.push(chars)
	}

	t.deepEqual(values, expectedValues)
})

test('check to option', t => {
	const alphabet = 'ab'
	const from = 4
	const to = 5
	const expectedValues = [
		'ab',
		'ba',
	]
	const values = []
	const generator = brute({
		alphabet,
		from,
		to,
	})

	for (const chars of generator) {
		values.push(chars)
	}

	t.deepEqual(values, expectedValues)
})
