import React from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Shop", path: "/" },
  { name: "Our Roots", path: "/roots" },
  { name: "Explore", path: "/explore" },
  { name: "Collections", path: "/collections" },
  { name: "Contact Us", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="wrapper fixed py-6 z-20">
      <div className="max-w-[1700px] w-[90%] flex justify-between items-center">
        <img
          src="/images/logo.svg"
          alt="logo"
          className="aspect-square h-[50px]"
        />

        <div className="bg-[rgba(50,50,50,0.3)] rounded-full backdrop-blur-[10px] h-[50px] text-sm flex items-center px-6">
          <ul className="flex gap-8 text-white font-medium">
            {links.map((link, i) => (
              <Link
                to={link.path}
                className={`relative inline-block transition-colors opacity-100 hover:opacity-90 font-kantumruy ${
                  currentPath === link.path ? "text-white" : ""
                }`}
                key={i}
              >
                {link.name}
                <span
                  className={`absolute left-1/2 -bottom-0.5 h-[2px] w-0 bg-white transform -translate-x-1/2 origin-center transition-all duration-300 ${
                    currentPath === link.path ? "w-[70%]" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex gap-5 bg-[rgba(50,50,50,0.3)] rounded-full backdrop-blur-[10px] h-[50px] items-center px-5">
          <img
            src="/images/user.svg"
            alt="user"
            className="h-[20px] aspect-square cursor-pointer"
          />
          <img
            src="/images/search.svg"
            alt="search"
            className="h-[20px] aspect-square cursor-pointer"
          />
          <img
            src="/images/shopping-cart.svg"
            alt="shopping-cart"
            className="h-[20px] aspect-square cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
