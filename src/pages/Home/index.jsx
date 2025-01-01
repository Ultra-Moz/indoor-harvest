import React from "react";
import Hero from "./Hero";
import Products from "./Products";
import Introduction from "./Introduction";
import Information from "./Information";
import OrderSection from "./OrderSection";
import PeoplesViews from "./PeoplesViews";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <Products />
      <Information />
      <PeoplesViews />
      <OrderSection />
    </>
  );
};

export default Home;
