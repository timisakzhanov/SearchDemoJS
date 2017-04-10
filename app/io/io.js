const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
	output: process.stdout
});

const io = {
	writeMessage: function(message) {
		console.log(message)
	},

	promptInput: function(message) {
		return new Promise((resolve, reject) => {
			rl.question(message, (answer) => resolve(answer))	
		})
	},

	closeIO: function() {
		rl.close()
	}
}

module.exports = io
