//  Import usestate(where you'll be putting json data) and useeffect(used for fetch to call it)

import React, { useState, useEffect } from "react";
import MyWatchList from "./MyWatchList";
import ShowList from "./ShowList";

function ShowCatalog() {
  // useState to drop shows
  const [shows, setShows] = useState([]);
  const [watchShows, setWatchShows] = useState([]);

  //Fetch data using useEffect
  useEffect(() => {
    fetch("http://localhost:8081/shows")
      .then((response) => response.json())
      .then((showsArray) => {
        console.log("Data Here:", showsArray);
        setShows(showsArray);
      });
  }, []);

  // add show, makes copy of empty array (...) then adding in new item

  function addShow(newShow) {
    // finds item and doesn't let it repeat when clicked
    const watchedShows = watchShows.find(
      (oldShows) => oldShows.id === newShow.id
    );
    if (!watchedShows) return setWatchShows([...watchShows, newShow]);
  }
  //   console.log("watchShows", watchShows);

  // Filter will shows array of everything that was not clicked
  function removeShow(removeThisShow) {
    const showRemoved = watchShows.filter(
      (watchedShow) => watchedShow.id !== removeThisShow.id
    );
    setWatchShows(showRemoved);
  }

  function deleteShow(showDeleted) {
    // Fetch DELETE to remove the entire Data from db.json Array
    fetch(`http://localhost:8081/shows/${showDeleted.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      //    This is to tell state to rerender the information that wasn't deleted
      .then(() => {
        //  updating our state for showlist
        setShows(
          shows.filter((currentShow) => currentShow.id !== showDeleted.id)
        );

        //  Updating our state for watchlist
        removeShow(showDeleted);
      });
  }

  return (
    <>
      <MyWatchList
        watchShows={watchShows}
        removeShow={removeShow}
        deleteShow={deleteShow}
      />
      <hr />
      <ShowList shows={shows} addShow={addShow} deleteShow={deleteShow} />
    </>
  );
}

export default ShowCatalog;
