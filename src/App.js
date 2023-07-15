import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Gallery from "./pages/Gallery";
import Todo from "./pages/Todo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/profile/:id/posts' element={<Posts />} />
        <Route path='/profile/:id/gallery' element={<Gallery />} />
        <Route path='/profile/:id/todo' element={<Todo />} />
      </Routes>
    </>
  );
};

export default App;
