import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActiveUser } from "./singleUserSlice";
import UserDetails from "../components/UserDetails";
import UserAddress from "../components/UserAddress";

const Profile = () => {
  const user = useSelector((state) => state.activeUser.activeUser);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActiveUser(id));
  }, [dispatch, id]);

  return (
    <>
      <Layout pageTitle={"Profile"}>
        <div className='profileContent px-0 py-8 flex w-full flex-col lg:flex-row'>
          {/* Div 2 */}
          <UserDetails user={user} />
          <UserAddress user={user} />
        </div>
      </Layout>
    </>
  );
};

export default Profile;
