import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router';
const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-semibold'>
        <Image src="/Images/bhanu.svg" alt="logo" width="120px" height="80px" />
        <div className='flex space-x-10 items-center'>
            <Link href='/'>
                <a><i className="fa-solid fa-house mr-2"></i><span>Home</span></a>
            </Link>
            <Link href='#aboutus'>
                <a><i className="fa-solid fa-location-dot mr-2"></i><span>Location</span></a>
            </Link>
            <Link href='#aboutus'>
                <a><i className="fa-brands fa-readme mr-2"></i><span>About Us</span></a>
            </Link>
            <Link href='/booking'>
                <a><i className="fa-solid fa-swatchbook mr-2"></i><span>Booking</span></a>
            </Link>
            <Link href="/">
                  <button  className='px-4 hover:shadow-nav transition-all text-md py-1 bg-navbarButton rounded-sm' onClick={()=>{sessionStorage.removeItem('Token') ;Router.push('/')}}>LogOut</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar