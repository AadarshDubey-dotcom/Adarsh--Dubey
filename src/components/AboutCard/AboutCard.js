import React from 'react';
import './AboutCard.css';

const photos = [
  { src: 'harsh.png', alt: 'Adarsh Dubey portrait' },
  { src: 'Adarsh.ico.png', alt: 'Adarsh Dubey profile' },
  { src: 'harsh.png', alt: 'Adarsh Dubey working' },
  { src: 'Adarsh.ico.png', alt: 'Adarsh Dubey avatar' },
];

function AboutCard() {
  return (
    <div className="photo-card">
      {photos.map((photo) => (
        <img
          key={photo.src + photo.alt}
          src={`${process.env.PUBLIC_URL}/${photo.src}`}
          alt={photo.alt}
        />
      ))}
    </div>
  );
}

export default AboutCard;
