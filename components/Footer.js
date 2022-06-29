import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex p-20 h-screen w-full bg-cover bg-center' style={{backgroundImage:'url(/Images/footer.svg)'}} >
      <div className='md:w-1/2 flex flex-col h-full justify-between'>
        {/* Social */}
        <div className='flex justify-between items-center text-5xl w-96'>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className='flex justify-between items-center w-[430px]'>
          <div>
            <div>Privacy Policy</div>
            <div className='mt-1'>Terms &#38; Conditions</div>
          </div>
          <div>
            <div>Need Help?</div>
            <div className='mt-1'>FAQs</div>
          </div>
        </div>
        <div>
          <div className='text-xl font-semibold'>Services</div>
          <div className='w-full'>
            <div className='flex space-x-40'>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2 text-pink-600 "></i> Purnea (HQ) <br/> +91 9661134518</div>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Kodarma <br/> +91 9431231375</div>
            </div>
            <div className='flex space-x-40'>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Naughachiya <br/> +91 9431231375</div>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Hazaribhag <br/> +91 9431231375</div>
            </div>
            <div className='flex space-x-40'>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Bhagalpur <br/> +91 9431231375</div>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Ramghar <br/> +91 9431231375</div>
            </div>
            <div className='flex space-x-40'>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2"></i> Navada <br/> +91 9431231375</div>
              <div className='py-2'><i className="fa-solid fa-location-dot mr-2 text-pink-600 "></i> Ranchi <br/> +91 9431231375</div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:w-1/2 p-20 flex justify-center items-center'>
        <div className='flex flex-col justify-between contactBackground w-full h-96 p-10 rounded-lg border border-white'>
          <input  className=' bg-signup p-2 rounded-md border border-slate-400 focus:outline-none' type="email" placeholder='Email'   />
          <textarea  className=' bg-signup p-2 rounded-md border border-slate-400 focus:outline-none' rows="6" cols="5" placeholder='Message'></textarea>
          <button className=' bg-signup p-2 rounded-lg border border-slate-400 '>Submit</button>
        </div>
      </div>
      <style jsx>{`
        .contactBackground {
          background: linear-gradient(109.86deg, rgba(244, 238, 244, 0.17) -59.62%, rgba(98, 28, 100, 0) 140.65%, #FA06FF 140.67%), radial-gradient(123.11% 288.11% at 44.46% 13%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%, rgba(5, 5, 5, 0.2) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, linear-gradient(255.43deg, rgba(15, 10, 240, 0.12) 1.61%, rgba(22, 18, 206, 0.02) 137.06%), linear-gradient(105.08deg, rgba(235, 0, 255, 0.2) -58.44%, rgba(222, 5, 241, 0.05) 178.74%);
        }
      `}</style>
    </div>
  )
}

export default Footer