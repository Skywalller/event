import React from "react";

const Nav = () => {
  return (
    <div className='container left-20 right-20 max-w-screen-2xl py-4 flex justify-between items-center bg-transparent absolute top-0 z-50'>
      <div className='text-2xl font-semibold text-white'>Event.com</div>
      <div className='flex gap-9 items-center'>
        <div className='text-primary hover:text-primary transition-colors cursor-pointer'>Home</div>
        <div className='text-white hover:text-primary transition-colors cursor-pointer'>Events</div>
        <div className='text-white hover:text-primary transition-colors cursor-pointer'>About</div>
        <div className='text-white hover:text-primary transition-colors cursor-pointer'>
          Contact
        </div>
        <button className='rounded-sm bg-primary text-white px-3.5 py-1.5 transition-transform active:scale-90'>
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
