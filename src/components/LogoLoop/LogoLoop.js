import React from "react";
import "./LogoLoop.css";

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
];

const LogoLoop = () => {
  return (
    <div className="logo-loop">
      <div className="logo-track">
        {logos.map((logo, i) => (
          <img src={logo} key={i} alt="logo" />
        ))}
        {/* duplicate for smooth loop */}
        {logos.map((logo, i) => (
          <img src={logo} key={"dup-" + i} alt="logo" />
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;