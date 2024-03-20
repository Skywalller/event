import React from "react";
import Navbar from "../../components/Navbar";
import BgImage from "@/assets/bg/bg3.png";
import BgImage1 from "@/assets/bg/bg2.png";
import { ReactComponent as SearchIcon } from "@/assets/icons/search.svg";
import { ReactComponent as CalenderIcon } from "@/assets/icons/calender.svg";
import UpcomingEvents from "./UpcomingEvents";
import ExploreCategories from "./ExploreCategories";
import HotOffers from "./HotOffers";
import OwnEvent from "./OwnEvent";
import TrendingEvents from "./TrendingEvents";
import Footer from "../../components/Footer";
import Interests from "./Interests";
import Nav from "../../components/Navbar/Nav";

const Event = () => {
  return (
    <>
      <div className='w-screen'>
        <div className='w-screen h-[700px] relative'>
          <Nav />
          <div className='bg-gradient-to-r from-[#ED4690] to-[#5522CC] h-full w-full z-10 absolute opacity-90'></div>
          <img
            src={BgImage}
            alt='bg-image'
            className='object-cover w-full h-full object-center absolute -z-0'
          />
          <div className='container mx-auto h-full max-w-screen-lg flex items-center justify-center z-50 relative'>
            <div className='h-auto w-auto'>
              <img src={BgImage1} className='h-full w-full object-cover object-center' />
            </div>
            <div className='flex flex-col gap-3'>
              <div className='text-5xl font-semibold text-white'>
                SBS MTV The Kpop Show Ticket Package
              </div>
              <div className='font-light text-white'>
                Look no further! Our SBS The Show tickets are the simplest way for you to experience
                a live Kpop recording.
              </div>
              <div className='flex gap-4'>
                <button className='px-6 py-2 text-white bg-primary rounded-full'>Get Ticket</button>
                <button className='px-6 py-2 text-white border border-white rounded-full'>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className='absolute z-10 flex items-center justify-between p-10 py-8 container mx-auto max-w-screen-lg rounded-xl bg-primary h-24 -bottom-8 right-10 left-10'>
            <div className='flex items-center'>
              <input
                type='text'
                placeholder='Search by events, name, location, and more'
                className='font-light placeholder:text-white/90 bg-transparent text-white'
              />
            </div>
            <div className='flex gap-5 h-full'>
              <div className='border-r border-r-gray-300 h-full' />
              <div className='flex items-center gap-1'>
                <CalenderIcon className='fill-white/90' />
                <input
                  type='text'
                  placeholder='Select date'
                  className='font-light placeholder:text-white/90 bg-transparent text-white'
                />
              </div>
            </div>
            <button className='bg-white text-black py-2 5 px-3 5 rounded-sm flex items-center gap-1 active:scale-90 transition-transform'>
              <SearchIcon className='stroke-black' />
              <div>Search</div>
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-14 mt-16 container mx-auto max-w-screen-xl'>
          <UpcomingEvents />
          <ExploreCategories />
          <HotOffers />
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

export default Event;
