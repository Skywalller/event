import React from "react";
import BgImage from "@/assets/bg/bg4.png";
import { ReactComponent as CalenderIcon } from "@/assets/icons/calender.svg";

const OwnEvent = () => {
  return (
    <div className='w-screen h-52 bg-primary/10'>
      <div className='container flex items-center mx-auto max-w-screen-xl w-full h-full gap-10'>
        <img
          src={BgImage}
          alt='bg-image5'
          className='w-96 h-60 object-cover object-center self-end'
        />
        <div className='flex flex-col gap-4'>
          <div className='text-primary text-4xl font-semibold leading-7'>Make your own Event</div>
          <div>
            Got a show, event, activity or a great experience? Partner with us & get listed on
            Eventify
          </div>
          <button className='bg-primary rounded-sm text-white py-2 px-3 flex items-center gap-2 w-fit'>
            <CalenderIcon className='fill-white' />
            <div>Create Event</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OwnEvent;
