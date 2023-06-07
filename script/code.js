const pokedex = document.querySelector("#pokdex");
const pokemon = [];

for (let i = 1; i < 494; i++) {
  let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  pokemon.push(fetch(url).then((res) => res.json()));
}
async function render() {
  await Promise.all(pokemon).then((results) => {
    results.forEach((element) => {
      console.log(element);
      pokedex.innerHTML += `
                        <div class="container">
                        <div class="card">
                        <p>${element.id}</p>
                      <h1>${element.name}</h1>
                      <p>${element.types
                        .map((type) => type.type.name)
                        .join(", ")}</p>
                        <img src="${element.sprites.front_default}" alt="${
        element.name
      }"/>
                      </div>
                      </div>
                      `;
    });
  });
}

render();
