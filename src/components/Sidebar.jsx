import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [mobileDrawerActive, setmobileDrawerActive] = useState(false);
  const { id } = useParams("id");
  const menuItems = [
    {
      path: `/profile/${id}`,
      label: "Profile",
      key: "profile",
    },
    {
      path: `/profile/${id}/posts`,
      label: "Posts",
      key: "posts",
    },
    {
      path: `/profile/${id}/gallery`,
      label: "Gallery",
      key: "gallery",
    },
    {
      path: `/profile/${id}/todo`,
      label: "ToDo",
      key: "todo",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === `/profile/${id}`) {
      setActive("profile");
    } else if (path.includes(`/profile/${id}/posts`)) {
      setActive("posts");
    } else if (path.includes(`/profile/${id}/gallery`)) {
      setActive("gallery");
    } else if (path.includes(`/profile/${id}/todo`)) {
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
        <ul className='list-none w-full'>
          {menuItems.map((item) => (
            <Link to={item.path} className='text-white text-lg' key={item.key}>
              <li
                className={`relative py-4 border-b border-white ${
                  active === item.key ? "text-white" : "text-gray-400"
                }`}
              >
                {item.label}
                {active === item.key && (
                  <div className=' absolute -right-[68px] transform translate-x-[-50%] top-2 bg-white py-2 px-2.5 rounded-tl-full rounded-bl-full rounded-br-[10%]'>
                    <AiOutlineRight color='#BDC5D4' strokeWidth='50' />
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
