import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdChevronRight, MdOutlineKeyboardArrowDown } from "react-icons/md";

const MessageBox = ({ user }) => {
  const [messageBoxActive, setMessageBoxActive] = useState(true);

  return (
    <div
      className={`rounded-t-2xl overflow-x-hidden border border-[#2C65C8] ${
        messageBoxActive ? "block" : "hidden"
      } `}
    >
      <div
        className='flex justify-between items-center cursor-pointer text-white bg-[#2C65C8] py-4 px-4 rounded-t-2xl'
        onClick={() => {
          setMessageBoxActive((state) => !state);
        }}
      >
        <div className='heading flex items-center gap-3'>
          <img
            className='rounded-full'
            src={user?.profilepicture}
            width='25px'
            alt='userprofile'
          />
          <p className='text-sm'>{user?.name}</p>
        </div>

        <div className='flex items-center'>
          <MdOutlineKeyboardArrowDown size={25} />
          <AiOutlineClose size={15} className='font-semibold' />
        </div>
      </div>
      <div className='messages flex flex-col bg-white h-56 py-2 px-4 overflow-y-auto  text-xs text-gray-500'>
        <div className='message agent rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='message agent rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='time'>
          <p className='text-xs'>9:16 PM</p>
        </div>
        <div className='message customer rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor.</p>
        </div>
        <div className='message customer rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum.</p>
        </div>
        <div className='message agent rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className='message customer rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className='message customer rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className='message customer rounded-sm bg-gray-100 py-1 px-2 my-1'>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
      <div className='flex w-full mx-auto items-center justify-between px-5 py-2 border-t border-gray-400'>
        <input type='text' className='outline-none ' />
        <MdChevronRight className='text-[#2C65C8] text-lg font-bold' />
      </div>
    </div>
  );
};

export default MessageBox;
