

function fetchChuckJSON() {
  // Feel free to download this HTML and edit it, to use another Pokemon ID
//   const pokemonId = 1;
  const url = `https://api.chucknorris.io/jokes/random/`;
  axios.get(url)
  .then(function(response) {
    return response.data; // SUBTLE difference with Fetch: response.data instead of response.json()
  })
    .then(function(chuck) {
      console.log('data decoded from JSON:', chuck);

      // Build a block of HTML
      const pokemonHtml = `
        <p><strong>${chuck.value}</strong></p>
        <img src="${chuck.icon_url}" />
      `;
      document.querySelector('#chuck-norris').innerHTML = pokemonHtml;
    });
}

fetchChuckJSON();