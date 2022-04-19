import React, { useContext, useState } from "react";
import Cata from "./Cata";
import Hero from "./Hero";
import Nav from "./Nav";
import Trending from "./Trending";
import { User, UserProvider } from "../context/Check";
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
