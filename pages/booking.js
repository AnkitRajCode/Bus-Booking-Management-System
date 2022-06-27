import React, {useContext, useState} from 'react';
import Seat from '../components/Seat';
import { SeatContext } from '../contexts/SeatContext';

const booking = () => {

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

export default booking