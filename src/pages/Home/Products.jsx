import React, { useState } from "react";

const productsInfo = [
  {
    img: "/images/product-1.png",
    name: "Super Green Power",
    discountedPrice: "$2.53",
    originalPrice: "$3.53",
  },
  {
    img: "/images/product-2.png",
    name: "Classic Salad Mix",
    discountedPrice: "$2.99",
    originalPrice: "$3.64",
  },
  {
    img: "/images/product-3.png",
    name: "Hydroponic Cherry Tomato",
    discountedPrice: "$0.99",
    originalPrice: "$1.14",
  },
];

const buttons = ["Best Seller", "Sale", "New"];

const Products = () => {
  const [activeButton, setActiveButton] = useState(0);
  return (
    <div className="wrapper">
      <div className="contain flex justify-center gap-10 py-6 flex-col">
        <div className="flex gap-3 justify-center">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center px-5 py-2.5 rounded-[20px] font-kantumruy font-medium text-sm transition-all duration-200 ${
                activeButton === index
                  ? "bg-[#343B2B] text-white"
                  : "bg-[#E7E8E2] text-[#343B2B]"
              }`}
              onClick={() => setActiveButton(index)}
            >
              {button}
            </button>
          ))}
        </div>

        <div className="flex justify-center gap-10">
          {productsInfo.map((productInfo, index) => (
            <div
              key={index}
              className="flex flex-col gap-12 items-center rounded-3xl bg-[#E7E8E2] pb-4 pt-10 w-full"
            >
              <img src={productInfo.img} alt="" />
              <div className="flex flex-col justify-center font-averia">
                <span className="text-[#343B2B] text-center text-xl">
                  {productInfo.name}
                </span>
                <div className="flex gap-3 justify-center">
                  <span className="text-[#343B2B]">
                    {productInfo.discountedPrice}
                  </span>
                  <span className="text-[#343b2b80] line-through">
                    {productInfo.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="relative text-center self-center text-xl font-kantumruy text-[#343B2B] font-medium inline-bloc cursor-pointer hover:opacity-90">
          Shop all products
          <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-[65%] bg-[#343B2B] transform -translate-x-1/2"></span>
        </span>
      </div>
    </div>
  );
};

export default Products;
