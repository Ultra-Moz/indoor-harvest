import React from "react";

const Hero = () => {
  return (
    <div
      className="wrapper min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
    >
      <div className="contain flex items-center">
        <div className="flex flex-col gap-4">
          <div className="text-7xl font-averia flex flex-col gap-3">
            <h1 className="text-white">Hydroponic Veggies</h1>
            <span className="text-white/70">Super food Greens</span>
          </div>
          <p className="font-avenir text-white/70 text-2xl max-w-[300px]">
            <span className="text-white">Swap</span> your aerated drinks with
            Super Green <span className="text-white">Power Packs</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
