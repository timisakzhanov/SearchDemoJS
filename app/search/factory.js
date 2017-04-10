'use strict'
const googleSearcher = require('./google_search')
const yahooSearcher = require('./yahoo_search')

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
