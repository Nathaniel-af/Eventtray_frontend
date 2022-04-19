// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cata from "./components/Cata";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Nav from "./components/Nav";
import Trending from "./components/Trending";
import {
  UserAuthContextProvider,
  userAuthContext,
} from "./context/UserAuthContext";
import Home from "./components/home";
import ProtectedRoute from "./components/ProtectedRoute";
import { User, UserProvider } from "./context/Check";
import { useState } from "react";

function App() {
  return (
    <>
      {/* for fire base login  <UserAuthContextProvider></UserAuthContextProvider> */}
      <UserProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} />
           */}
          {/* <Route
            path="/home"
            element={
              
               <ProtectedRoute>
                 <Home />
               </ProtectedRoute>
            }
          /> */}
        </Routes>
      </UserProvider>
    </>
  );
}

export default App;
