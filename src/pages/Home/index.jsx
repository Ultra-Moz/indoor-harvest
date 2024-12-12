import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Introduction from "./Introduction";
import Information from "./Information";
import Peoplesview from "./Peoplesview";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Products />
      <Information />
      <Peoplesview />
    </>
  );
};

export default Home;
