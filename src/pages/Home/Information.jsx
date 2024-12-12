import React from "react";

const Information = () => {
  return (
    <div className="wrapper py-20">
      <div className="contain bg-[#343B2B] rounded-3xl flex justify-between">
        <div className="flex flex-col gap-10 p-16 justify-between">
          <div className="font-averia text-5xl flex flex-col gap-4 text-nowrap">
            <h3 className="text-white">Redefining Food Culture</h3>
            <h3 className="text-[#ffffffb3]">with Better Agriculture</h3>
            <p className="text-xl font-sans text-[#ffffffb3] max-w-[22em] text-wrap">
              <span className="text-white">Combining</span> science-driven{" "}
              <span className="text-white">agriculture</span> with{" "}
              <span className="text-white">minimal resource</span> use and
              environmental care.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <button className="flex h-12 items-center px-6 rounded-2xl bg-white font-kantumruy text-[#343B2B] font-medium text-sm">
              Learn More
            </button>
            <button className="relative text-white font-kantumruy text-sm font-medium inline-block">
              Discover our impact
              <span className="absolute left-1/2 -bottom-1 h-[2px] w-[70%] bg-white transform -translate-x-1/2"></span>
            </button>
          </div>
        </div>

        <img src="/images/information-person.png" className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Information;
