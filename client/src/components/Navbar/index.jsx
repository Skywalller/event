import React from "react";

const Navbar = () => {
  return (
    <div className='w-screen shadow-md z-50 relative bg-white'>
      <div className='container mx-auto max-w-screen-2xl py-4 flex justify-between items-center'>
        <div className='text-2xl font-semibold text-primary'>Event.com</div>
        <div className='flex gap-9 items-center'>
          <div className='text-primary hover:text-primary transition-colors cursor-pointer'>
            Home
          </div>
          <div className='text-black hover:text-primary transition-colors cursor-pointer'>
            Events
          </div>
          <div className='text-black hover:text-primary transition-colors cursor-pointer'>
            About
          </div>
          <div className='text-black hover:text-primary transition-colors cursor-pointer'>
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
