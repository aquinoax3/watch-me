import React from "react";
import ShowCard from "./ShowCard";

function ShowList({ shows, addShow, deleteShow }) {
  // map through the array to show all the shows listed

  const showsListed = shows.map((show) => {
    return (
      <ShowCard
        key={show.id}
        show={show}
        onClick={addShow}
        deleteShow={deleteShow}
      />
    );
  });

  return <div className="show-container">{showsListed}</div>;
}

export default ShowList;
