import React, { useState } from "react";
import "./HoverButton.css";

export default function HoverButton({ children, link, download, outline, onClick }) {
  const [hovered, setHovered] = useState(false);

  const buttonContent = (
    <>
      <span className="btn-content">{children}</span>
      <span className={`gradient-border ${hovered ? "active" : ""}`}></span>
      <span className="btn-bg"></span>
    </>
  );

  const className = `hover-btn ${outline ? "outline" : ""}`;

  if (link) {
    return (
      <a
        href={link}
        className={`hover-btn-link ${className}`}
        download={download}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      className={className}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}
