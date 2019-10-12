const feed = require('rss-to-json');
const parser = require('node-html-parser')

const googlenews = (q, callback) => {
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
    rss.items.forEach((item) => {
      const desc = parser.parse(item.description)

      const itemObj = {
        title: desc.querySelector('a').rawText,
        source: desc.querySelector('font').rawText,
        url: desc.querySelector('a').attributes.href,
        pubDate: item.pubDate,
        created: item.created
      }

      output.items.push(itemObj)
    })

    callback(undefined, output)
  })
}

module.exports = googlenews
