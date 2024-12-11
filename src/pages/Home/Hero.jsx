import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const Hero = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="wrapper min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/hero-bg.png")' }}
    >
      <div className="max-w-[1700px] w-[90%] flex items-center relative">
        <div className="flex flex-col gap-6">
          <div className="text-6xl 2xl:text-7xl font-averia flex flex-col gap-3">
            <h1 className="text-white">Hydroponic Veggies</h1>
            <span className="text-white/70">Super food Greens</span>
          </div>
          <p className="text-white/70 text-xl 2xl:text-2xl max-w-[16em]">
            <span className="text-white">Swap</span> your aerated drinks with
            Super Green <span className="text-white">Power Packs</span>
          </p>
        </div>

        <div className="absolute bottom-[8.9%] flex items-end justify-between w-full">
          <div className="flex gap-10 items-end">
            <button className="text-white border-b-[1px] pb-1.5 border-white text-xl">
              Shop Now
            </button>

            <div className="w-[150px] text-sm flex items-center h-[36px] bg-white rounded-[20px] overflow-hidden">
              <Marquee
                speed={50}
                className="text-[#484848] py-2 text-nowrap px-2 flex items-center"
              >
                <span className="font-kantumruy font-medium">
                  Save 20% on your first order
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Marquee>
            </div>
          </div>

          <div className="text-white text-xl">
            Scroll Down{" "}
            <span className="-translate-y-[3px] inline-block"> ↓</span>
          </div>
        </div>

        <div
          className={`z-10 absolute bottom-[15%] left-[66%] -translate-x-[66%]`}
        >
          <div
            className="w-12 bg-white/30 aspect-square rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="w-6 bg-white aspect-square rounded-full"></div>
          </div>
          <motion.div
            className="flex bg-white rounded-full gap-3 p-2 absolute min-w-[300px] -top-[90px] left-[40px] flex-1 origin-bottom-left"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
            transition={{
              type: isActive ? "spring" : "tween",
              stiffness: isActive ? 150 : 100,
              damping: isActive ? 15 : 0,
              bounce: isActive ? 0.35 : 0,
            }}
          >
            <img
              src="/images/white-triangle.svg"
              className="absolute left-[2%] bottom-[4%] w-4"
              alt=""
            />
            <img
              src="/images/greens-mix-dish.png"
              className="aspect-square w-[70px] shrink-0"
              alt="dish"
            />
            <div className="font-averia flex flex-col w-full text-nowrap">
              <span className="text-[#969696] ">Green's Mix</span>
              <span className="text-[#484848] font-medium">
                Super Green Power Pack
              </span>
              <div className="flex items-center gap-2">
                <span className=" text-[#484848]">$2.99</span>
                <span className="text-white rounded-full flex items-center px-2 py-[2px] bg-[#899757]">
                  45% Off
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
