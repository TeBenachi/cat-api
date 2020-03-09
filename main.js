fetch(`https://api.thecatapi.com/v1/images/search`)
  .then(data => {
    return data.json();
  })
  .then(displayResults);

function displayResults(data) {
  console.log(data);

  let url = document.querySelector(".picbox");
  url.innerHTML = `<img src="${data[0].url}" class="img-fluid" >`;

  // Array objects sample => https://jsfiddle.net/adenF/njf4vts0/
}
