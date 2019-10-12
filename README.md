Welcome to Glitch
=================

Click `Show` in the header to see your app live. Updates to your code will instantly deploy and update live.

**Glitch** is the friendly community where you'll build the app of your dreams. Glitch lets you instantly create, remix, edit, and host an app, bot or site, and you can invite collaborators or helpers to simultaneously edit code with you.

Find out more [about Glitch](https://glitch.com/about).


This Project
------------

I wanted to be able to display news items based on a search, and it turns out Google provides News search results in RSS format. This project is a building block, intended to be [remixed](https://glitch.com/edit/#!/remix/google-news).

Most of the magic happens in `utils/googlenews.js`. It provides a single function that, based on the search term provided,  retrieves the RSS feed, converts it JSON, and does some other little bits of tidying up to better (IMHO) structure the data.


Usage
-----

````
const googlenews = require('.utils/googlenews')
googlenews('Search Term', callback(error, data))
````


-------------------

\ ゜o゜)ノ
