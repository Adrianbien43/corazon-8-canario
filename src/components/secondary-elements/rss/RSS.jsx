import React from "react";
import "./RSS.css";

const RSSIcon = () => {
  return (
    <div className="rss-icon-container">
      <a
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        className="rss-link"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/Feed-icon.svg"
          alt="RSS Feed"
          className="rss-icon"
        />
      </a>
    </div>
  );
};

export default RSSIcon;