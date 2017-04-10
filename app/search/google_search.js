'use strict'

const cheerio = require('cheerio')
const searcher = require('./search') 
const googleSearcher = Object.create(searcher)

googleSearcher.baseUrl = "http://www.google.com/search?q="
googleSearcher.parseHtml = function(body) {
	let $ = cheerio.load(body, {normalizeWhitespace: true})
	return {
		title: $('#ires .g h3 a').eq(0).text(),
		url: $('#ires .g .kv cite').eq(0).text()
	}
}

module.exports = googleSearcher
