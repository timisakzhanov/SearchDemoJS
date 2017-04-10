'use strict'

const SearchFactory = require('./search/factory')
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'query> '
})

let searchFactory = new SearchFactory();

let searchCallback = function(result) {
	console.log('title: ' + result.title)
	console.log('url: ' + result.url)
	process.exit(0)
}

function makeSearch(query, engine) {
	try {
		let searcher = searchFactory.createSearcher(engine)
		searcher.search(query, searchCallback)
	} catch(e) {
		console.log(e)
		rl.close()
	}
	
}

console.log('Enter query: ')

let query = ''
let engine = ''

rl.on('line', (line) => {
	let input = line.trim();
	if (input === 'exit') {
		console.log('Have a great day!')
		process.exit(0)
	}

	if (query === '') {
		query = input
		console.log('Enter engine: ')
	} else {
		engine = input
		makeSearch(query, engine)
	}
})
