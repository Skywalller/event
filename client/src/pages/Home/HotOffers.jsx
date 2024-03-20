import React from "react";
import { ReactComponent as ArrowRight } from "@/assets/icons/right.svg";
import { ReactComponent as TicketIcon } from "@/assets/icons/ticket.svg";
import EntertainmentImage from "@/assets/images/entertainment.png";
import TechnologyImage from "@/assets/images/technology.png";
import SportImage from "@/assets/images/sport.png";
import TravelImage from "@/assets/images/travel.png";
import HotOfferImage from "@/assets/images/hotOffer.png";
import DiscountImage from "@/assets/images/discountOffer.png";

const HotOffers = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center justify-between'>
          <div className='text-2xl font-semibold'>Hot Offers</div>
          <button className='text-primary flex items-center gap-1'>
            <div>View All</div>
            <ArrowRight />
          </button>
        </div>

        <div className='flex gap-4 h-[350px]'>
          <div className='flex-1 h-full rounded-xl overflow-hidden'>
            <img
              src={HotOfferImage}
              alt='hot-offerImg'
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='flex-1 h-full rounded-xl overflow-hidden'>
            <img
              src={DiscountImage}
              alt='hot-offerImg'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotOffers;
