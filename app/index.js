'use strict'

const io = require('./io/io')
const SearchFactory = require('./search/factory')

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
		io.writeMessage(e)
		io.closeIO()
	}
}

function obtainUserInput() {
	io.promptInput('Enter query: ')
		.then((query) => {
			io.promptInput('Select search engine (google, yahoo): ')
				.then((engine) => {
					makeSearch(query, engine)			
				})
		})
}

obtainUserInput()
