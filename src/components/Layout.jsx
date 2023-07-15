import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ChatMessenger from "./ChatMessenger";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <div className='overflow-x-hidden mb-[68px] p-12'>
        <Sidebar />
        <main className=' w-full md:pl-72 md:ml-5'>
          <Navbar pageTitle={pageTitle} />
          {children}
        </main>
        <ChatMessenger />
      </div>
    </>
  );
};

export default Layout;
