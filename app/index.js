'use strict'

const io = require('./io/io')
const SearchFactory = require('./search/factory')
const searchFactory = new SearchFactory();

function makeSearch(query, engine) {
	try {
		let searcher = searchFactory.createSearcher(engine)
		searcher.search(query, (result) => {
			io.writeMessage('title: ' + result.title)
			io.writeMessage('url: ' + result.url)
			io.closeIO()
		})
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
