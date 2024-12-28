import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Introduction from "./Introduction";
import Information from "./Information";
import PeoplesView from "./PeoplesView";
import OrderSection from "./OrderSection";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Products />
      <Information />
      <PeoplesView />
      <OrderSection />
    </>
  );
};

export default Home;
