import React from "react";

function ShowCard({ show, onClick, deleteShow }) {
  function getStreamingLogo(streamOnString) {
    let imgSrc;
    switch (streamOnString) {
      case "Amazon":
        imgSrc = "./images/amazon.png";
        break;
      case "HBO":
        imgSrc = "./images/hbo.webp";
        break;
      case "Hulu":
        imgSrc = "./images/hulu.png";
        break;
      case "Netflix":
        imgSrc = "./images/netflix.jpeg";
        break;
      case "Peacock":
        imgSrc = "./images/peacock.png";
        break;
    }
    return imgSrc;
  }

  function handleClick() {
    // console.log(show);
    onClick(show);
  }

  // console.log to show you targeted the show
  function handleDelete() {
    deleteShow(show);
  }

  return (
    <div className="show-card" onClick={handleClick}>
      <img src={show.image} alt="cover art" className="show-art" />
      <div className="details-container">
        <header>
          <h3>{show.name}</h3>
        </header>
        <p>{show.summary}</p>
        <footer>
          <img
            src={getStreamingLogo(show.stream_on)}
            alt={show.stream_on}
            className="streaming-logo"
          ></img>
          <button onClick={handleDelete}>Delete</button>
        </footer>
      </div>
    </div>
  );
}

export default ShowCard;
