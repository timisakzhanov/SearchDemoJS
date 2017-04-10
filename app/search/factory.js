'use strict'
const googleSearcher = require('./google_searcher')
const yahooSearcher = require('./yahoo_searcher')

function SearchFactory() {
	this.createSearcher = (type) => {
		if (type == 'google') {
			return googleSearcher
		}
		if (type == 'yahoo') {
			return yahooSearcher
		}

		throw new Error('You have entered unsupported engine');
	} 
}

module.exports = SearchFactory
