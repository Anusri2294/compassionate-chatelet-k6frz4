import React from "react";
import "../styles/Header.css";

const Header = ({ name, date }) => {
  return (
    <div className="interview-header">
      <span className="interview-left">
        Dori UX Interview: <span className="user-name">{name}</span>
      </span>
      <span className="interview-right">
        Today’s Date: <span className="date">{date}</span>
      </span>
    </div>
  );
};

export default Header;
