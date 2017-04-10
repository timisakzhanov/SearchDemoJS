'use strict'

const cheerio = require('cheerio')
const searcher = require('./search') 
const yahooSearcher = Object.create(searcher)

yahooSearcher.baseUrl = "https://search.yahoo.com/search?p="
yahooSearcher.parseHtml = function(body) {
	let $ = cheerio.load(body, {normalizeWhitespace: true})
	return {
		title: $('#web .mb-15 li h3 a').eq(0).text(),
		url: $('#web .mb-15 li h3 a').eq(0).attr('href')
	}
}

module.exports = yahooSearcher
