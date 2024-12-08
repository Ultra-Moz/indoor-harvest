import React from "react";

const Hero = () => {
  return (
    <div
      className="wrapper min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
    >
      <div className="contain">
        <div className="">
          <div className="text-6xl font-averia">
            <h1 className="text-white">Hydroponic Veggies</h1>
            <span className="text-white/70">Super food Greens</span>
          </div>
          <p className="">
            <span>Swap</span> your aerated drinks with Super Green{" "}
            <span>Power Packs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
