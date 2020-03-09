# Beginner api projects No.2: Cat-api

My API Journy #2.  API courtesy of Thecatapi.com. 

API shows a different cat image everytime page refresh. 

Live demo:  https://tebenachi.github.io/cat-api/


Things I learned:

(1) Fetching a JSON file using Fetch API

fetch(`${api.baseurl}`)
  .then(data => {
    return data.json();
  })
  .then(displayResults);
  
