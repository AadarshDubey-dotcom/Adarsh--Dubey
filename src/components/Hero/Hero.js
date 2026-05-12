import "./Hero.css";

const profile = "Harsh.png";

export default function Hero() {
  return (
    <div className="hero-container">
      
      <div className="circle-wrapper">
        
        <img src={profile} alt="Adarsh" className="profile-img" />

      </div>

    </div>
  );
}