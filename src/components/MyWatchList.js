import React from "react";
import ShowCard from "./ShowCard";

//empty array plus new item

function MyWatchList({ watchShows, removeShow, deleteShow }) {
  const watchedShows = watchShows.map((show) => {
    return (
      <ShowCard
        key={show.id}
        show={show}
        onClick={removeShow}
        deleteShow={deleteShow}
      />
    );
  });

  return <div className="watch-list-container">{watchedShows}</div>;
}

export default MyWatchList;
