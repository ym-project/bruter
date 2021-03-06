function* brute(options) {
	const chars = options.alphabet
	let index = options.from || 1

	let alphabet

	if (Array.isArray(chars)) {
		alphabet = chars.join('')
	} else if (typeof chars === 'string') {
		alphabet = chars
	} else {
		throw new TypeError('Argument "chars" should be array or string!')
	}

	const alphabetLength = alphabet.length
	const to = options.to || sumA(alphabetLength)

	while (index <= to) {
		yield numberToChars(index)
		index++
	}

	function numberToChars(number) {
		let chars = ''

		while (number > 0) {
			let n = (number - 1) % alphabetLength
			chars = alphabet[n] + chars

			number = Math.floor((number - n) / alphabetLength)
		}

		return chars
	}
}

function A(m, n) {
	return Math.pow(n, m)
}

function sumA(number) {
	return [...Array(number + 1).keys()]
		.slice(1)
		.map(it => A(it, number))
		.reduce((prev, current) => prev + current)
}

export default brute
