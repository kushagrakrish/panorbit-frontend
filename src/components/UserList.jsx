import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <>
      <ul className=' px-0 py-6 flex flex-col list-none h-[420px] overflow-y-scroll'>
        {users.map((user) => (
          <Link
            key={user.id}
            to={`/profile/${user.id}`}
            className='no-underline text-black'
          >
            <li className='flex p-2 border-b border-gray-300 items-center font-poppins'>
              <img
                className='rounded-full mr-4'
                width='35px'
                src={user.profilepicture}
                alt=''
              />
              <p>{user.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default UserList;
