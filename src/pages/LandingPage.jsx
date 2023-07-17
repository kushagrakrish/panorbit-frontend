import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";
import UserList from "../components/UserList";

const LandingPage = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  // This will fetch user's from api after component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <>
      <div className='landingPage'>
        <div className='rounded-3xl shadow-md bg-white overflow-hidden mt-24 mb-32 md:w-2/3 lg:w-1/2 xl:w-2/5'>
          <h4 className='title bg-gray-200 text-gray-700 py-10 text-center font-bold text-2xl tracking-wide'>
            Select an account
          </h4>

          <div className='px-10 pb-30 overflow-y-scroll'>
            <UserList users={users} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
