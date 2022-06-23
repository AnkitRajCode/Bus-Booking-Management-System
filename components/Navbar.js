import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center font-semibold py-6'>
        <Image src="/Images/bhanu.svg" alt="logo" width="160px" height="100px" />
        <div className='flex space-x-6 items-center'>
            <Link href='/'>
                <a className=''>Home</a>
            </Link>
            <Link href='/profile'>
                <a className=''>Profile</a>
            </Link>
            <Link href='/user'>
                <a className='px-4 hover:shadow-md text-sm py-1 bg-green-600 rounded-sm'>Signup</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar