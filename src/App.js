import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile/:id' element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
