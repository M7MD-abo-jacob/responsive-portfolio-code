import React from "react";
import "./shootingStars.css";

export default function ShootingStars() {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="stars">
      {(() => {
        const width = document.getElementById("root").offsetWidth;
        const height = window.innerHeight;
        const stars = [];
        for (let i = 0; i < width / 100; i++) {
          stars.push(
            <span
              className="star"
              style={{
                "--posx": `${random(0, width - 100)}px`,
                "--posy": `${random(0, height - 70)}px`,
                "--speed": `${random(2, 4)}s`,
                "--delay": `${random(1, 3)}s`,
              }}
              key={i}
            ></span>
          );
        }

        return stars;
      })()}
    </div>
  );
}
