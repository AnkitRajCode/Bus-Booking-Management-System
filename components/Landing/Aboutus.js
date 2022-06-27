import React from 'react'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <div className="flex w-full justify-around pt-20 pb-40">
      <div className="w-[500px] h-[390px] p-12 bg-contain bg-center bg-no-repeat" style={{backgroundImage:'url(/Images/aboutCard.svg)'}}>
        <div className='text-4xl font-bold '>About Us</div>
        <div className='mt-4 text-slate-300 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </div>
      </div>

      <div className="w-[500px] h-[390px] px-12 py-5 bg-contain bg-center bg-no-repeat" style={{backgroundImage:'url(/Images/aboutCard.svg)'}}>
        <div className='flex justify-between items-center'>
          <div className='text-xl font-semibold'>Service Locations</div>
          <Image src="/Images/service.svg" width="100%" height="100%" alt="service" />
        </div>
        <div className='flex justify-between flex-wrap'>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
          <div className='w-40 px-4 py-1 bg-service rounded-md drop-shadow-md mt-5'><i className="fa-solid fa-location-dot mr-2"></i> Purnea</div>
        </div>
      </div>
      
    </div>
  )
}

export default Aboutus