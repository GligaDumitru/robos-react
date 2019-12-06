import React from "react";
import { Card } from "../card/card.component";

export const CardList = ({ robos, textSearch }) => {
  return (
    <div className="card-list">
      {robos ? (
        robos.map(robo => {
          if (robo.title.includes(textSearch))
            return <Card key={robo.id} robo={robo} />;
        })
      ) : (
        <h1>-</h1>
      )}
    </div>
  );
};
