import React from "react";
import EntertainmentImage from "@/assets/images/entertainment.png";
import TechnologyImage from "@/assets/images/technology.png";
import SportImage from "@/assets/images/sport.png";
import TravelImage from "@/assets/images/travel.png";

const ExploreCategories = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-col'>
        <div className='text-2xl font-semibold'>Explore Categories</div>
      </div>
      <div className='flex items-baseline justify-center gap-5 flex-wrap'>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={EntertainmentImage}
              alt='e-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>Entertainment</div>
        </div>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={TechnologyImage}
              alt='tech-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>Educational & Business</div>
        </div>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={SportImage}
              alt='e-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>Cultural & Arts</div>
        </div>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={EntertainmentImage}
              alt='e-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>SPorts & Fitness</div>
        </div>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={TechnologyImage}
              alt='e-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>Technology</div>
        </div>
        <div className='flex flex-col gap-2 items-center w-28 p-2 box-content'>
          <div className='size-20 rounded-full bg-black/70 shrink-0 overflow-hidden'>
            <img
              src={TravelImage}
              alt='e-image'
              className='object-center object-cover h-full w-full'
            />
          </div>
          <div className='text-black text-sm text-center'>Adventure</div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategories;
