// client-side js
// run by the browser each time your view template is loaded

console.log('hello world :o');

// define variables that reference elements on our page
const articlesList = document.getElementById('articles');
const searchForm = document.forms[0];
const searchInput = searchForm.elements['q'];
const loadingMessage = document.getElementById('loading');

// retrieve and display articles
const retrieveArticles = () => {
  loadingMessage.textContent = 'Loading...';
  articlesList.innerHTML = '';

  fetch('/news?q=' + encodeURIComponent(searchInput.value)).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        leadingMessage.textContent = data.error
      } else {
        loadingMessage.textContent = '';
        console.log(data);

        data.items.forEach((item) => {
          console.log(item);
          const newArticle = document.createElement('li');
          newArticle.innerHTML = '<a href="' + item.url + '" target="_blank">' + item.title + '</a>';
          articlesList.appendChild(newArticle)
        })
      }
    })
  })
}

// listen for the form to be submitted and trigger the function above when it is
searchForm.onsubmit = (e) => {
  // stop our form submission from refreshing the page
  e.preventDefault();
  retrieveArticles();
}

// retrieve articles when the page loads
retrieveArticles();
