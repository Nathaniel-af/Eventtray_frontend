// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Cata from "./components/Cata";
// import Hero from "./components/Hero";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import Nav from "./components/Nav";
// import Trending from "./components/Trending";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/home";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { User, UserProvider } from "./context/Check";
// import { useState } from "react";
import Messenger from "./pages/Messenger";
import Feed from "./pages/feed";
import Otp from "./pages/otp";
import Submit from "./pages/otpverify";
import Chat from "./components/Chat";
import Eventdetail from "./components/eventdetail";

function App() {
  return (
    <>
      {/* for fire base login  <UserAuthContextProvider></UserAuthContextProvider> */}
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Eventdetail" element={<Eventdetail />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/submit" element={<Submit />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Messenger" element={<Messenger />} />
          <Route path="/feed" element={<Feed />} />
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
      </UserAuthContextProvider>
    </>
  );
}

export default App;
