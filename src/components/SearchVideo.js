import React from "react";
import "../styles/VideoSearch.css";
import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const SearchVideo = ({ video, onSelect, isSelected }) => {
  const [urlInput, setUrlInput] = useState("");
  const handlePlay = () => {
    if (urlInput.trim() !== "") {
      const newVideo = {
        url: urlInput,
        title: "User url Video",
      };
      onSelect(newVideo);
      setUrlInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePlay();
    }
  };
  return (
    <>
      <div className="video-search-bar">
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter video URL..."
        />
        <button onClick={handlePlay}>▶ Play</button>
      </div>
    </>
  );
};

export default SearchVideo;
