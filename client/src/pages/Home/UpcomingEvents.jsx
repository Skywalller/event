import React from "react";
import { ReactComponent as ArrowRight } from "@/assets/icons/right.svg";
import { ReactComponent as TicketIcon } from "@/assets/icons/ticket.svg";
import EntertainmentImage from "@/assets/images/entertainment.png";
import TechnologyImage from "@/assets/images/technology.png";
import SportImage from "@/assets/images/sport.png";
import TravelImage from "@/assets/images/travel.png";

const UpcomingEvents = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-semibold'>Upcoming Events</div>
          <button className='text-primary flex items-center gap-1'>
            <div>View All</div>
            <ArrowRight />
          </button>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8'>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

const EventCard = () => {
  return (
    <div className='h-[390px] w-[380px] rounded-xl shadow-md overflow-hidden flex flex-col mx-auto bg-white'>
      <div className='w-full h-[200px]'>
        <img
          src={SportImage}
          alt='ent-image'
          className='w-full h-full object-cover object-center'
        />
        <div className='flex gap-4 items-start p-3'>
          <div className='flex-col font-semibold'>
            <div className='uppercase text-sm text-primary'>APR</div>
            <div className='text-2xl leading-5'>24</div>
          </div>
          <div className='flex flex-col overflow-hidden gap-1.5'>
            <div className='font-semibold leading-5 line-clamp-2'>
              Wonder Girls 2010 Wonder Girls World Tour San Francisco
            </div>
            <div className='text-xs font-light text-black/80 line-clamp-2'>
              We’ll get you directly seated and inside for you to enjoy the show.
            </div>
            <div className='text-xs font-light text-black'>7:00 AM - 9:00 AM</div>
            <div className='text-xs font-light text-success flex items-center gap-1.5'>
              <TicketIcon />
              <div>QR 1900</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
