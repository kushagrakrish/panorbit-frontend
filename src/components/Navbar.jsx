import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchActiveUser } from "../pages/singleUserSlice";
import { fetchUsers } from "../pages/usersSlice";
import ProfileUserModal from "./ProfileUserModal";

const Navbar = ({ pageTitle }) => {
  const [modalOpened, setModalOpened] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const modalRef = useRef();
  const profileInfoRef = useRef();
  const { activeUser, loading } = useSelector((state) => state.activeUser);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchActiveUser(id));

    const handleOutsideClick = (event) => {
      if (
        !modalRef.current.contains(event.target) &&
        !profileInfoRef.current.contains(event.target)
      ) {
        setModalOpened(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [dispatch, id]);

  return (
    <>
      <div className=' flex justify-between items-center border-b border-gray-300 pb-2'>
        <h3 className='font-bold text-base md:text-2xl text-gray-700'>
          {pageTitle}
        </h3>
        <div className='relative p-3'>
          <div
            className=' flex gap-3 items-center cursor-pointer'
            onClick={() => setModalOpened(!modalOpened)}
            ref={profileInfoRef}
          >
            <img
              className='rounded-full md:w-12'
              width='35px'
              src={activeUser.profilepicture}
              alt='user'
            />
            <p className=' text-gray-700 font-medium text-base md:text-lg'>
              {activeUser.name}
            </p>
          </div>

          <div className='profileModalWrapper' ref={modalRef}>
            <ProfileUserModal
              activeUser={activeUser}
              users={users}
              modalOpened={!modalOpened}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
