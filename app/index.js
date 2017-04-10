'use strict'

const io = require('./io/io')
const SearchFactory = require('./search/factory')
const searchFactory = new SearchFactory();

function makeSearch(query, engine) {
	return new Promise((resolve, reject) => {
		try {
			let searcher = searchFactory.createSearcher(engine)
			searcher.search(query, (result) => {
				resolve(result)
			})
		} catch(e) {
			reject(e)
		}
	})
}

function obtainUserInput() {
	io.promptInput('Enter query: ')
		.then((query) => {
			io.promptInput('Select search engine (google, yahoo): ')
				.then((engine) => {
					makeSearch(query, engine)
						.then((result) => {
							io.writeMessage('title: ' + result.title)
							io.writeMessage('url: ' + result.url)
							io.closeIO()
						})
						.catch((reason) => {
							io.writeMessage(e)
							io.closeIO()
						})
				})
		})
}

obtainUserInput()
