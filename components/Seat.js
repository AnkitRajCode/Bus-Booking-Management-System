import React, { useState, useContext } from 'react';
// import { SeatContext } from '../contexts/SeatContext';

const MyButton = ({selectedDate, seatno, seatBooked}) => {
  // const { seats, setSeats } = useContext(SeatContext);
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

  // const [seatBooked, setSeatBooked] = useState([]);

  const seatSelect = (e) => {
    if (seatBooked.length > 0) {
        const index = seatBooked.findIndex((item) => item.date === selectedDate);
        if (index > -1) {
          seatBooked[index].seats.push({name:seatno,boarding:"opp",destination:"opp"});
        } else {
          seatBooked.push({
            date: selectedDate,
            seats: [{name:seatno,boarding:"opp",destination:"opp"}],
          });
        }
      } else {
        seatBooked.push({
          date: selectedDate,
          seats: [{name:seatno,boarding:"opp",destination:"opp"}],
        });
      }
      //console.log(seatBooked)
  };

  return <button onClick={seatSelect}>{seatno}</button> 
}

const Seat = () => {
    const [selectedDate, setSelectedDate] = useState('');
    // const { seats, setSeats } = useContext(SeatContext);
    const [seatBooked, setSeatBooked] = useState([]);


    
  return (
    <div>
        <input type="date" id="date" onChange={(e) => {setSelectedDate(e.target.value)}} />
        <div className='flex justify-center'>
          <div className='w-[330px] h-[700px] bg-contain bg-center bg-no-repeat' style={{backgroundImage:"url(/Images/booking.svg)"}}>
            <div className='ml-[75px] pt-52'>
              {/* <i className="fa-solid fa-square"></i> */}
              <MyButton selectedDate={selectedDate} seatBooked={seatBooked} setSeatBooked={setSeatBooked} seatno={"A1"}/>
              <span className='ml-[140px]'>
                {/* <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i> */}
                <MyButton selectedDate={selectedDate} seatBooked={seatBooked} setSeatBooked={setSeatBooked} seatno={"A2"}/>
                <MyButton selectedDate={selectedDate} seatBooked={seatBooked} setSeatBooked={setSeatBooked} seatno={"A3"}/>
              </span>
            </div>
            {/* <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div> */}
          </div>
        </div>
        
        <MyButton selectedDate={selectedDate}/>
        <button onClick={(e) => console.log(seatBooked)}>submit</button>
    </div>
  )
}

export default Seat