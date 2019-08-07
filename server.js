const express = require('express');
const path = require('path');
const app = express();

// Serve static files....
app.use(express.static(__dirname + '/dist/daily-verse-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/daily-verse-app/index.html'));
});

// default Heroku PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Express server listening on port', port)
});