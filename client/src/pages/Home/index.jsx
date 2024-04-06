import React from "react";
import Navbar from "../../components/Navbar";
import BgImage from "@/assets/bg/bg1.png";
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
import { ReactComponent as CalenderIcon } from "@/assets/icons/calender.svg";
import UpcomingEvents from "./UpcomingEvents";
import OwnEvent from "./OwnEvent";
import TrendingEvents from "./TrendingEvents";
import Footer from "../../components/Footer";
import Interests from "./Interests";

const Home = () => {
  return (
    <>
      <div className='w-screen'>
        <Navbar />
        <div className='w-screen h-[550px] relative overflow-hidden'>
          <img
            src={BgImage}
            alt='bg-image'
            className='object-cover w-full h-full object-center absolute -z-0 -top-12'
          />
          <div className='text-5xl font-semibold text-primary relative text-center pt-24 z-10'>
            Exclusive events, priceless moments
          </div>
          <div className='absolute z-10 flex items-center justify-between px-5 py-3 container mx-auto max-w-screen-lg border-2 border-black rounded-sm bg-white h-16 bottom-2 right-10 left-10'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search by events, name, location, and more'
                className='font-light placeholder:text-black/70'
              />
            </div>
            <div className='flex gap-5 h-full'>
              <div className='border-r border-r-gray-300 h-full' />
              <div className='flex items-center gap-1'>
                <CalenderIcon className='fill-black/60' />
                <input
                  type='text'
                  placeholder='Select date'
                  className='font-light placeholder:text-black/70'
                />
              </div>
            </div>
            <button className='bg-primary text-white py-2 5 px-3 5 rounded-sm flex items-center gap-1 active:scale-90 transition-transform'>
              <SearchIcon />
              <div>Search</div>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-14 mt-14 container mx-auto max-w-screen-xl'>
          <UpcomingEvents />
        </div>
        <div className='mt-20'></div>
        <OwnEvent />
        <div className='flex flex-col gap-14 mt-14 container mx-auto max-w-screen-xl'>
          <TrendingEvents />
          <Interests />
        </div>
        <div className='mb-10'></div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
