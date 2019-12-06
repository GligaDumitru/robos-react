import React from "react";

export const Card = props => {
  return (
    props.robo && (
      <div className="card-list__body">
        <img
          src={`https://robohash.org/${props.robo.id}?set=set2&size=180x300`}
          alt=""
        />
        <h2 className="card-list__title">{props.robo.title}</h2>
        <p className="card-list__description">{props.robo.body}</p>
      </div>
    )
  );
};
