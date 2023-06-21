import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ frontImg, backImg, name, hp }) {

  const [showFront, setShowFront] = useState(true);

  function handleCardClick() {
    setShowFront((prevFront) => !prevFront);
  }

  return (
    <Card onClick={handleCardClick}>
      <div>
        <div className="image">
          <img src={showFront ? frontImg : backImg} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
