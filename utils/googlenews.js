const feed = require('rss-to-json');
const parser = require('node-html-parser')

const googlenews = (q, callback, limit = 100) => {
  if (limit > 100) limit = 100
  const url = 'https://news.google.com/rss/search?q=' + encodeURIComponent(q)

  feed.load(url, (err, rss) => {
    if (err) {
      callback('Unable to fetch news articles.', undefined)
      return
    }

    // Build an output object
    const output = {
      title: rss.title,
      url: rss.url,
      items: []
    }

    // Parse each rss item to get at the structure in the description field
    let i
    for (i = 0; i < limit; i++) {
      const desc = parser.parse(rss.items[i].description)

      const itemObj = {
        title: desc.querySelector('a').rawText,
        source: desc.querySelector('font').rawText,
        url: desc.querySelector('a').attributes.href,
        pubDate: rss.items[i].pubDate,
        created: rss.items[i].created
      }

      output.items.push(itemObj)
    }

    callback(undefined, output)
  })
}

module.exports = googlenews
