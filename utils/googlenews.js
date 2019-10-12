const feed = require('rss-to-json')

const googlenews = (query) => {
  //console.log(query)

  const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent(query)

  feed.load(url, (err, rss) => {
    if (err) {
      console.log('Unable to fetch news articles')
    } else {
      console.log(rss)
    }
  })
}

module.exports = googlenews
