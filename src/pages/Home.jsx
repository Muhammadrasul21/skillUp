import React from "react";
import Hero from "../components/Hero";
import Followers from "../components/followers";
import { Chart } from "../components/Chart";

const Home = () => {
  return (
    <>
      <Hero />
      <Followers />
      <Chart />
    </>
  );
};

export default Home;
