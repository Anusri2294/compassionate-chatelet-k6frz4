import React, { useState } from "react";
import VideoCard from "./VideoCard";
import "../styles/VideoList.css";

const VideoList = ({ videos, currentIndex, onSelect, onNext, onPrev }) => {
  return (
    <div className="video-list">
      <div className="video-grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            video={video}
            onSelect={() => onSelect(video)}
            isSelected={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
