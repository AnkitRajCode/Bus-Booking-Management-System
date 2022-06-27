import React from 'react'

const Gallary = () => {
  return (
    <div>
      <div className='flex  mb-10'>
        <div className='w-[640px] h-40 bg-cover bg-center ' style={{backgroundImage:'url(/Bus/bus4.jpg)'}}></div>
        <div className='w-[300px] h-40 bg-cover bg-center  ml-16' style={{backgroundImage:'url(/Bus/bus1.jpg)'}}></div>
        <div className='w-[300px] h-40 bg-cover bg-center  ml-10' style={{backgroundImage:'url(/Bus/bus7.jpg)'}}></div>
      </div>
      <div className='flex mb-40'>
        <div className='flex flex-col'>
          <div className='w-[300px] h-40 bg-cover bg-center ' style={{backgroundImage:'url(/Bus/bus4.jpg)'}}></div>
          <div className='w-[300px] h-40 bg-cover bg-center  mt-10' style={{backgroundImage:'url(/Bus/bus5.jpg)'}}></div>
        </div>
        <div className='w-[300px] h-[360px] ml-10 bg-cover bg-center' style={{backgroundImage:'url(/Bus/bus2.jpg)'}}></div>
        <div className='ml-16'>
          <div className='w-[640px] h-40 bg-cover bg-center ' style={{backgroundImage:'url(/Bus/bus4.jpg)'}}></div>
          <div className='flex mt-10'>
            <div className='w-[300px] h-40 bg-cover bg-center ' style={{backgroundImage:'url(/Bus/bus6.jpg)'}}></div>
            <div className='w-[300px] h-40 bg-cover bg-center  ml-10' style={{backgroundImage:'url(/Bus/bus3.jpg)'}}></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Gallary