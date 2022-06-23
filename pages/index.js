import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from "next/image"

const index = () => {
  return (
    <>
      <div className=''>
        {/* Header */}
        <div className="px-20">
          <Navbar/>
          <div className="flex flex-row h-screen">
            <div className="w-2/3 h-full">
              <Image src="/Images/bus.svg" alt="bus" width="1100px" height="800px" className=" mix-blend-lighten" />
            </div>
            <div className="w-1/3 h-full flex justify-center items-center">
              <div className="h-[490px] w-full bg-cover" style={{backgroundImage:'url(/Images/button.svg)'}}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default index