import React from "react";
import { ReactComponent as RightIcon } from "@/assets/icons/right.svg";

const Interests = () => {
  return (
    <div className='bg-primary/10 py-4 h-52 box-center flex-col gap-4'>
      <div className='text-primary text-4xl font-semibold leading-7'>
        Events specially curated for you!
      </div>
      <div>
        Get event suggestions tailored to your interests! Don't let your favorite events slip away.
      </div>
      <button className='bg-primary rounded-sm text-white py-2 px-3 flex items-center gap-2 w-fit'>
        <div>Get Started</div>
        <RightIcon className='first-of-type:!stroke-white' />
      </button>
    </div>
  );
};

export default Interests;
