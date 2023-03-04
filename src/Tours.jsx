import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <tours>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </tours>
  );
};

export default Tours;
