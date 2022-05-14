// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Home from "./components/home";
import ProtectedRoute from "./components/ProtectedRoute";
// import { User, UserProvider } from "./context/Check";
// import { useState } from "react";
import Messenger from "./pages/Messenger";
import Feed from "./pages/feed";
import Otp from "./pages/otp";
import Submit from "./pages/otpverify";
import Chat from "./components/Chat";
import Eventdetail from "./components/eventdetail";
import Buy from "./components/Buy";
import CreateAccount from "./components/createaccount";
import Search from "./components/search";

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
          <Route path="/createaccount" element={<CreateAccount />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/Messenger" element={<Messenger />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/signup" element={<Signup />} />
           */}
          <Route
            path="/buy"
            element={
              <ProtectedRoute>
                <Buy />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </>
  );
}

export default App;
