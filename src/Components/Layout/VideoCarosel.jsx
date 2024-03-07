import "../../Styles/Layout/VideoCarosel.css";
import React, { useState } from "react";

export const VideoCarousel = ({ videos }) => {
  const [startVideoIndex, setStartVideoIndex] = useState(0);

  const handleNext = () => {
    setStartVideoIndex((prevIndex) =>
      prevIndex === videos.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setStartVideoIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-main">
      <div className="row px-5">
        {videos
          .slice(startVideoIndex, startVideoIndex + 3)
          .map((video, index) => (
            <div className="col-4">
              <iframe
                key={index}
                title={video.title}
                width="560"
                height="315"
                src={video.link}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </div>
      <div className="controls">
        <button className="d-flex justify-content-start" onClick={handlePrev}><i class="bi bi-caret-left-fill"></i></button>
        <button className="d-flex justify-content-end" onClick={handleNext}><i class="bi bi-caret-right-fill"></i></button>
      </div>
    </div>
  );
};
