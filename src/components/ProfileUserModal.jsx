import { Link } from "react-router-dom";

const ProfileModal = ({ activeUser, users, modalOpened }) => {
  return (
    <div
      className={`${
        modalOpened && "hidden"
      } modal-box-shadow px-7 py-3 rounded-3xl absolute w-80 top-full md:right-20 -right-[50px] bg-white block`}
    >
      <div className='flex flex-col items-center py-2.5 px-10'>
        <img
          className='w-20 rounded-full'
          src={activeUser.profilepicture}
          alt=''
        />
        <p className='text-lg font-medium mt-2'>{activeUser.name}</p>
        <p className='text-gray-500 text-base'>{activeUser.email}</p>
      </div>
      <div>
        <ul className='h-32 overflow-auto '>
          {users.map(
            (user) =>
              activeUser.id !== user.id && (
                <Link key={user.id} to={`/profile/${user.id}`}>
                  <li className='flex items-center  py-2 border-t border-gray-300 px-10'>
                    <img
                      className='w-9 rounded-full'
                      src={user.profilepicture}
                      alt=''
                    />
                    <p className='ml-2'>{user.name}</p>
                  </li>
                </Link>
              )
          )}
        </ul>
      </div>
      <Link to={"/"}>
        <button
          className='
       my-5 text-center flex items-center justify-center bg-[#D55151] text-white mx-auto rounded-full px-6 py-2 font-bold'
        >
          Sign Out
        </button>
      </Link>
    </div>
  );
};

export default ProfileModal;
