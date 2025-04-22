import React, { useState } from "react";
import { videoData as initialVideoData } from "./Data/VideoData";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import "./styles.css";
import Header from "./components/Header";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SearchVideo from "./components/SearchVideo";
function App() {
  const [videos, setVideos] = useState(initialVideoData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentVideo = videos[currentIndex];

  const handleSelect = (video) => {
    const index = videos.findIndex((v) => v.url === video.url);
    if (index !== -1) {
      setCurrentIndex(index);
    } else {
      setVideos((prevVideos) => [...prevVideos, video]);
      setCurrentIndex(videos.length);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const today = new Date(Date.now());
  const formattedDate = today.toLocaleDateString("en-CA", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="app-container">
      <Header name="Anu Sri" date={formattedDate} />
      <div className="main-content">
        <div className="video-list-container">
          <div className="nav-buttons">
            <button onClick={handlePrev} className="btn">
              <SkipPreviousIcon /> Prev
            </button>
            <button onClick={handleNext} className="btn">
              Next <SkipNextIcon />
            </button>
          </div>
          <VideoList
            videos={videos}
            currentIndex={currentIndex}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        </div>

        <div className="video-player-container">
          <VideoPlayer video={currentVideo} />
        </div>
      </div>
      <div className="search-video-container">
        <SearchVideo onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
