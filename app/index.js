'use strict'

const googleSearcher = require('./search/google_search')
const yahooSearcher = require('./search/yahoo_search')
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'query> '
})

let searchCallback = function(result) {
	console.log('title: ' + result.title)
	console.log('url: ' + result.url)
	process.exit(0)
}

function makeSearch(query, engine) {
	if (engine === 'google') {
		googleSearcher.search(query, searchCallback)
		return
	} 
	if (engine === 'yahoo') {
		yahooSearcher.search(query, searchCallback)
		return
	}
	console.log('Wrong search engine')
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
