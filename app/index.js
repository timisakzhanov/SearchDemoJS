'use strict'

const search_module = require('./search')
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: 'query> '
})

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
		search_module.searcher.search(query, (result) => {
			console.log('title: ' + result.title)
			console.log('url: ' + result.url)
			process.exit(0)
		})
	}
})
