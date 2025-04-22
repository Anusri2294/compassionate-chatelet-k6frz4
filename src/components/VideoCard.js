import React from "react";
import "../styles/videoCard.css";

const VideoCard = ({ video, onSelect, isSelected }) => (
  <div
    className={`video-card ${isSelected ? "selected" : ""}`}
    onClick={() => onSelect(video)}
  >
    <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
    <div className="video-info-overlay">
      <div>{video.title}</div>
      <div>{video.info}</div>
    </div>
  </div>
);

export default VideoCard;
