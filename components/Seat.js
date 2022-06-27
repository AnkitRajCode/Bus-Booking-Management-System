import React, { useState, useContext } from 'react';
import { SeatContext } from '../contexts/SeatContext';

const MyButton = ({selectedDate}) => {
  const { seats, setSeats } = useContext(SeatContext);
  const seatSelect2 = () => {
    //setSeats([...seats, "A1",selectedDate]);
    // setSeats([...seats, {selectedDate: 'A1'}])
    //setSeats([...seats, selectedDate, "A1"]);
    setSeats({
        date: selectedDate,
        seats: [...seats.seats, {
            name: "temp",
            boardingpoint: "delhi",
            endpoint: "mumbai"
        }]
    })
    console.log(seats)
  }

  const [seatBooked, setSeatBooked] = useState([]);

  const seatSelect = (e) => {
    if (seatBooked.length > 0) {
        const index = seatBooked.findIndex((item) => item.date === selectedDate);
        if (index > -1) {
          seatBooked[index].seats.push({name:"opp",boarding:"opp",destination:"opp"});
        } else {
          seatBooked.push({
            date: selectedDate,
            seats: [{name:"opp",boarding:"opp",destination:"opp"}],
          });
        }
      } else {
        seatBooked.push({
          date: selectedDate,
          seats: [{name:"opp",boarding:"opp",destination:"opp"}],
        });
      }
      console.log(seatBooked)
  };

  return <button onClick={seatSelect}>seat1</button> 
}

const Seat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const { seats, setSeats } = useContext(SeatContext);

    
  return (
    <div>
        <input type="date" id="date" onChange={(e) => {setSelectedDate(e.target.value)}} />
        <MyButton selectedDate={selectedDate}/>
        <MyButton selectedDate={selectedDate}/>
        <button>submit</button>
    </div>
  )
}

export default Seat