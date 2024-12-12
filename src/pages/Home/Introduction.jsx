import React from "react";
import {
  Plant02Icon,
  Knife01Icon,
  CheckmarkBadge02Icon,
  ContainerTruck01Icon,
} from "hugeicons-react";

const features = [
  {
    img: Plant02Icon,
    title: "Natural Formula",
    text: "Swap your aerated drinks with Super Green Power Packs",
  },
  {
    img: Knife01Icon,
    title: "Cruelty-Free",
    text: "Swap your aerated drinks with Super Green Power Packs",
  },
  {
    img: CheckmarkBadge02Icon,
    title: "Expert Approved",
    text: "Swap your aerated drinks with Super Green Power Packs",
  },
  {
    img: ContainerTruck01Icon,
    title: "Free Shipping",
    text: "Swap your aerated drinks with Super Green Power Packs",
  },
];

const Introduction = () => {
  return (
    <div className="wrapper py-24">
      <div className="contain flex flex-col gap-20">
        <div className="flex justify-center w-full gap-4">
          {features.map((feature, index) => (
            <div className="flex px-4 py-6 flex-col items-center gap-3 w-full rounded-2xl bg-white">
              <feature.img />
              <h3 className="text-[#484848] text-center font-averia text-xl">
                {feature.title}
              </h3>
              <p className="text-[#969696] text-center text-sm">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-black text-center text-5xl 2xl:text-6xl font-averia w-full">
          <div className="flex items-center justify-center">
            Welcome to our{" "}
            <img
              src="/images/introduction-1.png"
              className="aspect-square 2xl:scale-110"
              alt=""
            />
            one-step farm of
          </div>
          <span>everything</span>
          <div className="flex items-center justify-center">
            <img
              src="/images/introduction-2.png"
              className="aspect-square 2xl:scale-110"
              alt=""
            />
            <span>healthy and sustainable</span>
            <img
              src="/images/introduction-3.png"
              className="aspect-square 2xl:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
