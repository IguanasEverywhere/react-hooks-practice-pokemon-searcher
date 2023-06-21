import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {

  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  });

  function handleFormChange(e) {
    if (e.target.name === 'frontUrl') {
      setFormData({
        ...formData,
        sprites: {
          front: e.target.value,
          back: formData.sprites.back
        }
      })
    } else if (e.target.name === 'backUrl') {
      setFormData({
        ...formData,
        sprites: {
          front: formData.sprites.front,
          back: e.target.value
        }
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addNewPokemon(formData);
          setFormData({
            name: '',
            hp: '',
            sprites: {
              front: '',
              back: ''
            }
          })
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleFormChange} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleFormChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
