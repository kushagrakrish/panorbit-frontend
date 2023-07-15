import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { AiOutlineRight, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [mobileDrawerActive, setmobileDrawerActive] = useState(false);
  const { id } = useParams("id");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/profile/" + id) {
      setActive("profile");
    } else if (path.includes("/profile/" + id + "/posts")) {
      setActive("posts");
    } else if (path.includes("/profile/" + id + "/gallery")) {
      setActive("gallery");
    } else if (path.includes("/profile/" + id + "/todo")) {
      setActive("todo");
    }
  }, [location, id]);
  return (
    <>
      <div
        className={`sidebar ${
          mobileDrawerActive ? "mobileDrawerActive" : ""
        } min-h-[90vh] w-72 bg-gradient-to-bl from-blue-700 to-purple-700 fixed left-8 top-8 rounded-3xl flex items-center p-10 transition-all ease-in-out`}
      >
        <div
          className='menu-icon md:hidden block fixed top-8 left-8 text-white text-3xl cursor-pointer'
          onClick={() => setmobileDrawerActive((state) => !state)}
        >
          {!mobileDrawerActive ? (
            <AiOutlineMenu className='text-black' />
          ) : (
            <AiOutlineClose />
          )}
        </div>
        <ul className=' list-none w-full'>
          <Link to={`/profile/${id}`} className='text-white text-lg'>
            <li
              className={`relative py-4 border-b border-white ${
                active === "profile" ? "text-white" : "text-gray-400"
              }`}
            >
              Profile
              {active === "profile" && (
                <div className='active absolute -right-[68px] transform translate-x-[-50%] top-2 bg-white py-2 px-2.5 rounded-tl-full rounded-bl-full rounded-br-[10%]'>
                  <AiOutlineRight color='#BDC5D4' strokeWidth='50' />
                </div>
              )}
            </li>
          </Link>

          <Link to={`/profile/${id}/posts`} className='text-white text-lg'>
            <li
              className={`relative py-4 border-b border-white ${
                active === "posts" ? "text-white" : "text-gray-400"
              }`}
            >
              Posts
              {active === "posts" && (
                <div className='active absolute -right-[68px] transform translate-x-[-50%] top-2 bg-white py-2 px-2.5 rounded-tl-full rounded-bl-full rounded-br-[10%]'>
                  <AiOutlineRight color='#BDC5D4' strokeWidth='50' />
                </div>
              )}
            </li>
          </Link>

          <Link to={`/profile/${id}/gallery`} className='text-white text-lg'>
            <li
              className={`relative py-4 border-b border-white ${
                active === "gallery" ? "text-white" : "text-gray-400"
              }`}
            >
              Gallery
              {active === "gallery" && (
                <div className='active absolute -right-[68px] transform translate-x-[-50%] top-2 bg-white py-2 px-2.5 rounded-tl-full rounded-bl-full rounded-br-[10%]'>
                  <AiOutlineRight color='#BDC5D4' strokeWidth='50' />
                </div>
              )}
            </li>
          </Link>

          <Link to={`/profile/${id}/todo`} className='text-white text-lg'>
            <li
              className={`relative py-4 border-b border-white ${
                active === "todo" ? "text-white" : "text-gray-400"
              }`}
            >
              ToDo
              {active === "todo" && (
                <div className='active absolute -right-[68px] transform translate-x-[-50%] top-2 bg-white py-2 px-2.5 rounded-tl-full rounded-bl-full rounded-br-[10%]'>
                  <AiOutlineRight color='#BDC5D4' strokeWidth='50' />
                </div>
              )}
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
