import React from "react";
import { ReactComponent as ArrowRight } from "@/assets/icons/right.svg";
import { ReactComponent as TicketIcon } from "@/assets/icons/ticket.svg";
import EntertainmentImage from "@/assets/images/entertainment.png";
import TechnologyImage from "@/assets/images/technology.png";
import SportImage from "@/assets/images/sport.png";
import TravelImage from "@/assets/images/travel.png";
import config from "../../config/config";
import { ReactComponent as LocationIcon } from "@/assets/icons/location.svg";
import { ReactComponent as ArrowUpRight } from "@/assets/icons/upRight.svg";
import getAmount from "../../utils/getAmount";
import { Button } from "@material-tailwind/react";

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

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-2'>
          {config.seed.events.map((event, index) => {
            return <EventCard event={event} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;

const EventCard = ({ event }) => {
  return (
    <div className='cursor-pointer group relative h-[500px] max-w-[380px] shadow-md hover:scale-[1.01] hover:shadow-xl transition-[shadow_translate] overflow-hidden flex flex-col mx-auto bg-white'>
      <div
        className={`w-full h-full absolute translate-y-full group-hover:-translate-y-0 transition-[transition_color] duration-200`}
      >
        <div className='w-full h-full relative flex items-end justify-center'>
          <img src={event.img} alt='' className='w-full h-full object-center object-cover' />
          <div className='flex items-center absolute gap-1 bg-black/40 rounded-lg px-2 mb-4'>
            <div className='text-white'>View Details</div>
            <ArrowUpRight className='stroke-white size-8' />
          </div>
        </div>
      </div>
      <div className='h-[300px] w-full'>
        <img
          src={event.img}
          alt='ent-image'
          className='w-full h-full object-cover object-top -z-0'
        />
      </div>
      <div className='flex flex-1 gap-4 items-start p-3'>
        <div className='flex-col font-semibold'>
          <div className='uppercase text-sm text-primary'>{event.date.from.split(" ")[1]}</div>
          <div className='text-2xl leading-5'>{event.date.from.split(" ")[0]}</div>
        </div>
        <div className='flex flex-col overflow-hidden gap-1.5'>
          <div className='font-semibold leading-5 line-clamp-2'>{event.name}</div>
          <div className='text-xs font-light text-black/80 line-clamp-2'>{event.description}</div>
          <div className='text-xs font-light text-black flex items-center gap-1 leading-none'>
            <LocationIcon className='stroke-black/70' />
            <span>{event.location}</span>
          </div>
          <div className='text-xs font-light text-success flex items-center gap-1.5'>
            <TicketIcon />
            <div>{getAmount(event.price)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
