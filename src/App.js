// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/home";
import ProtectedRoute from "./components/ProtectedRoute";
import { TicketProvider } from "./context/Check";
import { useState } from "react";
import Messenger from "./pages/Messenger";
import Feed from "./pages/feed";
import Otp from "./pages/otp";
import Submit from "./pages/otpverify";
import Chat from "./components/Chat";
import Eventdetail from "./components/eventdetail";
import CreateAccount from "./components/createaccount";
import Search from "./components/search";
import Checkout from "./components/Checkout";
import Profile from "./components/Profile";
import EditProfile from "./components/editprofile";

function App() {
  return (
    <>
      {/* for fire base login  <UserAuthContextProvider></UserAuthContextProvider> */}
      <TicketProvider>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/Chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="/otp" element={<Otp />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Messenger" element={<Messenger />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editprofile" element={<EditProfile />} />
          {/* <Route path="/signup" element={<Signup />} />
           */}
          x
          <Route path="/Eventdetail/:id" element={<Eventdetail />} />
          <Route
            path="/checkout:check"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </TicketProvider>
    </>
  );
}

export default App;
