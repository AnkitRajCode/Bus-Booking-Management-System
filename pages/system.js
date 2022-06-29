import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const system = () => {
  return (
    <>
      <div className='mx-20 mb-20'>
        <Navbar />
        <div className='flex justify-center'>
          <div className='w-[330px] h-[700px] bg-contain bg-center bg-no-repeat' style={{backgroundImage:"url(/Images/booking.svg)"}}>
            <div className='ml-[75px] pt-52'>
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
            </div>
            <div className='ml-[75px] pt-7'>
              <i className="fa-solid fa-square"></i>
              <span className='ml-[140px]'>
                <i className="fa-solid fa-square"></i>
                <i className="fa-solid fa-square ml-7"></i>
              </span>
            </div>
          </div>
        </div>

        <div className='py-5 flex justify-evenly'>
          <div>
            <div className='text-xl font-semibold'>Seat</div>
            <div>A1</div>
          </div>
          <div>
            <div className='text-xl font-semibold'>Price</div>
            <div>$ 45</div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='py-1 px-4 bg-green-700 rounded-md'>Checkout</div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default system