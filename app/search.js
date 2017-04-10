'use strict'

const fetch = require('node-fetch')
const cheerio = require('cheerio')


const searcher = (
	() => {
		let callback
		let baseUrl = "http://www.google.com/search?q="
		
		function generateUrl(query) {
			return baseUrl + query	
		}

		function getContent(url) {
			fetch(url, { method: 'get'})
				.then((res) => { return res.text() })
				.then((body) => { return parseHtml(body) })
				.then((result) => { 
						callback(result)
					})
		}

		function parseHtml(body) {
			let $ = cheerio.load(body, {normalizeWhitespace: true})

			return {
				title: $('#ires .g h3 a').eq(0).text(),
				url: $('#ires .g .kv cite').eq(0).text()
			}
		}

		return {
			search: (query, _callback) => {
				let url = generateUrl(query)
				callback = _callback
				getContent(url)
			}
		}
	})()




module.exports.searcher = searcher
