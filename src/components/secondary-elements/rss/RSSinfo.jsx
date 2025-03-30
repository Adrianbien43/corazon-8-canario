import React from "react";
import "./RSSinfo.css";

const RSSInfo = () => {
  return (
    <a
      href="/rss.xml"
      target="_blank"
      rel="noopener noreferrer"
      className="rss-icon-link"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/43/Feed-icon.svg"
        alt="RSS Icon"
        className="rss-icon"
      />
    </a>
  );
};

export default RSSInfo;