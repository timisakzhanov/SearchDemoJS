'use strict'

const fetch = require('node-fetch')

const searcher = {
	generateUrl: function(query) {
		return this.baseUrl + query
	},
	
	getContent: function(url) {
		fetch(url, { method: 'get'})
			.then((res) => { return res.text() })
			.then((body) => { return this.parseHtml(body) })
			.then((result) => {
				this.callback(result)
			})
	},

	search: function(query, callback) {
		let url = this.generateUrl(query)
		this.callback = callback
		this.getContent(url)
	}
}

module.exports = searcher
