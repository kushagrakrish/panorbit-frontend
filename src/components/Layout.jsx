import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <div className='overflow-x-hidden mb-[68px] p-12'>
        <Sidebar />
        <main className='ml-0 w-full p-0 md:ml-72 md:pl-12'>
          <Navbar pageTitle={pageTitle} />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
