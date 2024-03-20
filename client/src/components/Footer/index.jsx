import React from "react";

const Footer = () => {
  return (
    <div className='bg-primary w-screen'>
      <div className='container mx-auto max-w-screen-xl w-full'>
        <div className='flex flex-col gap-5'>
          <div className='h-full w-full py-8 grid lg:grid-cols-3 gap-10'>
            <div className='flex flex-col gap-2 mx-auto self-start'>
              <div className='text-3xl font-semibold text-white leading-7'>Event.com</div>
              <div className='text-sm  text-white/90 font-light text-center lg:text-start'>
                Eventick is a global self-service ticketing platform for live experiences that
                allows anyone to create, share, find and attend events that fuel their passions and
                enrich their lives.
              </div>
            </div>
            <div className='flex flex-col gap-2 mx-auto self-start'>
              <div className='text-xl font-semibold text-white'>Help & Info</div>
              <div className='flex flex-col gap-1 font-light text-white/90 text-sm'>
                <div>About Us</div>
                <div>Contact Us</div>
                <div>FAQs</div>
                <div>Terms of Services</div>
                <div>Privacy Policy</div>
                <div>Account Support</div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mx-auto self-start'>
              <div className='text-xl font-semibold text-white'>Stay in The Loop</div>
              <div className='flex flex-col gap-3'>
                <div className='font-light text-white/90 text-xs'>
                  Join our mailing list to stay in the loop with our newest for Event and concert
                </div>
                <div className='flex max-w-96 h-10 relative rounded-md overflow-hidden'>
                  <input
                    className='bg-white placeholder:text-black/60 text-black text-sm w-full h-full px-2 pr-20'
                    placeholder='Enter your email address'
                  />
                  <button className='bg-primary absolute right-1.5 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 text-white'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='border-t border-t-gray-400 py-2 text-center text-white/70'>
            © 2024 Event.com All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
