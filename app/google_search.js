'use strict'

const search_module = require('./search')
const cheerio = require('cheerio')
const google_searcher = {}

google_searcher.__proto__ = search_module.searcher


google_searcher.parseHtml = (body) => {
	console.log('parseHtml')
	let $ = cheerio.load(body, {normalizeWhitespace: true})
	return {
		title: $('#ires .g h3 a').eq(0).text(),
		url: $('#ires .g .kv cite').eq(0).text()
	}
}

module.exports.searcher = google_searcher
