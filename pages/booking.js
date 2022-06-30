import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Seat from '../components/Seat'
const booking = () => {
  return (
    <>
      <div className='mx-20 mb-20'>
        <Navbar />
        <Seat />

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

export default booking