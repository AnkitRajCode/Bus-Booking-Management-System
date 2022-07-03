import React, { useState, useContext, useEffect } from 'react';
import { app, database } from '../firebase/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Seat from '../components/Seat'



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




const booking = () => {

  const databaseRef = collection(database, 'Bus Booking')
    const [selectedDate, setSelectedDate] = useState('');
    // const { seats, setSeats } = useContext(SeatContext);
    const [seatBooked, setSeatBooked] = useState([]);
    const [fireData, setFireData] = useState([]);

    const addData = () => {
      addDoc(databaseRef, {
        BusBooking: seatBooked
      })
      .then(() => {
        alert("data sent");
        setSeatBooked([]);
      })
      .catch((err) => {
        console.log(err);
      })
    }

    const getData = async () => {
      await getDocs(databaseRef)
      .then((res) => {
        setFireData(res.docs.map((data) => {
          return {...data.data(), id: data.id};
        }));
      })
    }
  
  
    useEffect(() => {
      getData();
    }, [])

  return (
    <>
      <div className='mx-20 mb-20'>
        <Navbar />
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
        <button onClick={addData}>submit</button>
    </div>


        {fireData.map((data) => {
          return (
            <div>
              {data.BusBooking.map((dat) => {
                return (
                  <div key={dat.id} className='py-5 flex justify-evenly'>
                    <div>Date: {dat.date}</div>
                    <div>
                      <div className='text-xl font-semibold'>Seat</div>
                      <div>
                        {dat.seats.map((seat) => {
                          return (
                            <div>{seat.name}</div>
                          )
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <div className='text-xl font-semibold'>Price</div>
                      <div>
                        {dat.seats.map((seat) => {
                          return (
                            <div>$ 45</div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          )
        })}
              

        
        <div className='flex justify-center'>
          <div className='py-1 px-4 bg-green-700 rounded-md'>Checkout</div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default booking