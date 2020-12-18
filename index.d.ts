interface BruteOptions {
	alphabet: string | string[]
	from?: number
}

declare const brute: (options: BruteOptions) => Iterable<string>

export = brute
