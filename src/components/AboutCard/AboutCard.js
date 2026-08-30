import React from 'react';
import './AboutCard.css';

const photos = [
  { src: 'harsh.png', alt: 'Adarsh Dubey portrait' },
  { src: 'about1.jpg', alt: 'Adarsh Dubey profile' },
  { src: 'about2.png', alt: 'Adarsh Dubey working' },
  { src: 'about1.jpg', alt: 'Adarsh Dubey avatar' },
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
