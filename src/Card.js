import React from "react";

const card = (prop) => {
  return (
    <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="{prop.name}"
        src={`https://robohash.org/${prop.id}?size=200x200`}
      />
      <div>
        <h4>{prop.name}</h4>
        <p>{prop.email}</p>
      </div>
    </div>
  );
};

export default card;
