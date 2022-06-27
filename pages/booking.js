import React, { useState } from 'react';
import Seat from '../components/Seat';

const Booking = () => {

    const [seats, setSeats] = useState([]);


  return (
    <div>
        <SeatContext.Provider value={{seats, setSeats}}>
            <Seat  />
            {seats.length>0 && seats.map((seat, index) => {
            // return (
            //   <div key={index}>{seat}</div>
            // )
          })}
        </SeatContext.Provider>
    </div>
  )
}

export default Booking