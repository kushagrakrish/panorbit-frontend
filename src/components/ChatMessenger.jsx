import { useState } from "react";
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxChatBubble } from "react-icons/rx";
import { useSelector } from "react-redux";
import MessageBox from "./MessageBox";

const ChatMessenger = ({ user }) => {
  const [chatMessengerActive, setChatMessengerActive] = useState(false);
  const [messengerBoxActive, setMessengerBoxActive] = useState(false);
  const [inboxUser, SetInboxUser] = useState("");
  const users = useSelector((state) => state.users.users);

  const handleChatUserClick = (user) => {
    setMessengerBoxActive((state) => !state);
    SetInboxUser(user);
  };
  return (
    <>
      <div className='fixed right-8 md:right-7 bottom-5 flex items-center gap-5'>
        <div>
          {messengerBoxActive && chatMessengerActive && (
            <MessageBox user={inboxUser} />
          )}
        </div>

        <div className='w-60 overflow-hidden rounded-tl-2xl rounded-tr-2xl border border-[#2C65C8]'>
          <div
            className='flex justify-between items-center cursor-pointer text-white bg-[#2C65C8] py-4 px-4'
            onClick={() => setChatMessengerActive((state) => !state)}
          >
            <div className=' flex items-center'>
              <RxChatBubble size={22} />
              <p className='ml-2 text-base'>Chats</p>
            </div>
            {!chatMessengerActive ? (
              <MdKeyboardArrowUp size={25} />
            ) : (
              <MdOutlineKeyboardArrowDown size={25} />
            )}
          </div>

          <div className='pr-4 bg-white'>
            <div
              className={` ${
                chatMessengerActive ? "block" : "hidden"
              } h-60 overflow-y-scroll text-sm px-4`}
            >
              {users.map((user, index) => (
                <div
                  key={user.id}
                  className=' flex justify-between items-center'
                >
                  <div
                    className=' flex items-center cursor-pointer py-2'
                    onClick={() => handleChatUserClick(user)}
                  >
                    <img
                      className='w-7 h-7 rounded-full mr-2'
                      src={user?.profilepicture}
                      alt=''
                    />
                    <p className='font-medium font-poppins text-[#4A4A4A]'>
                      {user?.name}
                    </p>
                  </div>
                  <div
                    className={` rounded-full w-2.5 h-2.5 ${
                      index % 3 === 0 ? "bg-gray-300" : "bg-[#1EAC61]"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessenger;
