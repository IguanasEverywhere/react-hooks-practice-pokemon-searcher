import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then(r => r.json())
      .then(pokemon => setAllPokemon(pokemon));
  }, [])

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  function addNewPokemon(newPokemon) {
    fetch('http://localhost:3001/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
      .then(r => r.json())
      .then(addedPokemon => setAllPokemon([...allPokemon, addedPokemon]))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon} />
      <br />
      <Search handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
      <br />
      <PokemonCollection pokemonToRender={allPokemon.filter((poke) => poke.name.includes(searchQuery))} />
    </Container>
  );
}

export default PokemonPage;
