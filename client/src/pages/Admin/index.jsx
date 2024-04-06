import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Dashboard", to: "/admin/dashboard" },
  { name: "Events", to: "/admin/event" },
  { name: "Tickets", to: "/admin/ticket" },
  { name: "Check-in", to: "/admin/checkin" },
];

const AdminPanel = () => {
  return (
    <div className='flex w-screen bg-primary/5'>
      <div className='flex w-[320px] bg-white h-screen rounded-lg p-4 flex-col'>
        <div className='flex flex-col gap-4 w-full'>
          <div className='text-2xl text-primary font-bold mx-auto'>Eventy.com</div>
          <div className='flex flex-col gap-3'>
            {links.map((link, index) => {
              return <StyledLink link={link} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

const StyledLink = ({ link }) => {
  return (
    <NavLink
      to={link.to}
      children={({ isActive }) => {
        return (
          <div
            className={`flex items-center ${
              isActive && "bg-primary/20 shadow-md "
            }  rounded-sm text-black px-3 py-2 w-full cursor-pointer`}
          >
            {link.name}
          </div>
        );
      }}
    />
  );
};
