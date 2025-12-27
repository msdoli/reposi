const { buttonPrev, searchPokemon, renderPokemon } = require("./poke");

buttonPrev.addEventListener('click', () => {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
});
