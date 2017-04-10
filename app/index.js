'use strict'

const io = require('./io/io')
const SearchFactory = require('./search/factory')

function makeSearch(query, engine) {
	return new Promise((resolve, reject) => {
		try {
			(new SearchFactory()).createSearcher(engine)
				.search(query, result => resolve(result))
		} catch(e) {
			reject(e)
		}
	})
}

const userInputs = {
	query: null,
	engine: null
}

function obtainUserInput() {
	io.promptInput('Enter query: ')
		.then((query) => { userInputs.query = query	})
		.then(() => io.promptInput('Select search engine (google, yahoo): '))
		.then((engine) => { userInputs.engine = engine })
		.then(() => makeSearch(userInputs.query, userInputs.engine))
		.then((result) => {
			io.writeMessage('title: ' + result.title)
			io.writeMessage('url: ' + result.url)
		})
		.catch((reason) => io.writeMessage(reason))
		.then(() => io.closeIO())
}

obtainUserInput()
