import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonToRender }) {

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonToRender.map((pokemon) =>
        <PokemonCard
          key={pokemon.id}
          frontImg={pokemon.sprites.front}
          backImg={pokemon.sprites.back}
          name={pokemon.name}
          hp={pokemon.hp}
        />
      )}
    </Card.Group>
  );
}

export default PokemonCollection;
