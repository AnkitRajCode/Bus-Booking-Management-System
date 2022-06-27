import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Image from "next/image"
import Aboutus from "../components/Landing/Aboutus"
import Gallary from "../components/Landing/Gallary"

const index = () => {
  return (
    <>
      <div>
        {/* Header */}
        <div className="px-20">
          <Navbar/>
          <div className="flex flex-row h-screen">
            <div className="w-2/3 h-full">
              <Image src="/Images/bus.svg" alt="bus" width="1100px" height="800px" className=" mix-blend-lighten" />
            </div>
            <div className="w-1/3 h-full flex justify-center items-center">
              <div className="h-[390px] w-96 bg-contain bg-center bg-no-repeat flex flex-col pl-10 pr-8 py-6" style={{backgroundImage:'url(/Images/card.svg)'}}>
                <div className=" w-full border border-slate-300  rounded-md p-5">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-teal-400 font-bold text-md">FROM</div>
                      <div className="mt-5 text-sm">PRNA</div>
                      <div className="text-slate-300 text-xs">Purnea</div>
                    </div>
                    <div className="text-teal-400 font-medium text-base mt-10">
                      <i className="fa-solid fa-right-left"></i>
                    </div>
                    <div>
                      <div className="text-teal-400 font-bold text-md">TO</div>
                      <div className="mt-5 text-sm">RNC</div>
                      <div className="text-slate-300 text-xs">Ranchi</div>
                    </div>
                  </div>

                  <hr className="my-5" />


                  <div className="">
                    <div>
                      <div className="text-teal-400 font-semibold text-md">Date Of Journey</div>
                      <div>30 June 2022</div>
                    </div>
                    <div className="text-teal-400 font-semibold text-md mt-2">No. of Pasangers</div>
                    <div>+ 1 -</div>
                  </div>

                  
                </div>
                <div className=" mt-5 flex flex-row justify-center items-center">
                  <div className="w-32 h-12 bg-contain bg-center bg-no-repeat cursor-pointer hover:shadow-md" style={{backgroundImage:'url(/Images/button.svg)'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* About us Section */}
          <Aboutus/>

          {/* Gallary Section */}
          <Gallary/>

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default index