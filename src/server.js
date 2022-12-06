// Dumb little web server we only spawn because we need specific CORS
// policies enabled in order to use WASM and have access to ArrayBuffers
var express = require('express');
var cors = require('cors');

var app = express();
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	res.setHeader('Cross-origin-Embedder-Policy', 'require-corp');
	res.setHeader('Cross-origin-Opener-Policy','same-origin');
	if(req.method === 'OPTIONS') {
		res.sendStatus(200);
	} else {
		next();
	}
});
app.use(express.static('html'));

var http = require('http').createServer(null, app);
http.on('error', function(err) {
	console.log('Web server error:', err)
	if(err.code == 'EADDRINUSE') {
		callback('Port already in use');
	} else {
		callback('Error starting backend:', err);
	}
});
http.listen(9000, function() {
	console.log('Janus/Lyra backend started');
});
