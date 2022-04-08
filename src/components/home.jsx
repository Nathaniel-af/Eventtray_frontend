import React from "react";
import Cata from "./Cata";
import Hero from "./Hero";
import Nav from "./Nav";
import Trending from "./Trending";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Cata />
      <Trending />
    </>
  );
}

export default Home;
