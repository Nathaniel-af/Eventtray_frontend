import React, { useContext, useState } from "react";
import Cata from "./Cata";
import Hero from "./Hero";
import Nav from "./Nav";
import Trending from "./Trending";
import { User, UserProvider } from "../context/Check";
import Helmet from "react-helmet";
function Home() {
  return (
    <>
      <Helmet>
        <title>Event Tray</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Nav />
      <Hero />
      <Cata />
      <Trending />
    </>
  );
}

export default Home;
