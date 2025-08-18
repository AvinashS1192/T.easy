import React from "react";
import hero from "../../assets/hero.jpg";
export const Hero = () => {
  return (
    <div>
      <div
        className="  h-screen w-screen bg-no-repeat bg-cover "
        style={{ backgroundImage: `url(${hero})` }}
      >
        Hero
      </div>
      <div className="bg-zinc-900 w-screen h-screen"></div>
    </div>
  );
};
