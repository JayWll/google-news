// server.js
// where your node app starts

// init project
const express = require('express');
const googlenews = require('./utils/googlenews');
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/news', (req, res) => {
  if (!req.query.q) {
    return res.send({error: 'You must provide a search term.'})
  }

  googlenews(req.query.q, (error, data) => {
    if (error) return res.send({error: error})
    else res.send(data)
  })
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 4200, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
