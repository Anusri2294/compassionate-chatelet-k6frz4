import React from "react";
import "../styles/VideoPlayer.css";

function VideoPlayer({ video }) {
  if (!video) return <div>Loading...</div>;


  const getYouTubeID = (url) => {
    const match = url.match(/(?:\?v=|\.be\/)([^\s&]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeID(video.url);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="player-box">
      <h2>Video Playback: {video.title}</h2>
      <iframe
        title={video.title}
        width="100%"
        height="400px"
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
