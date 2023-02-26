import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import logo from './IDHM Logooo.png';
import './NavBar.css';

function NavBar() {
  const [nav1, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav1);
  };

  return (
    <div className=' flex glass shadow-2xl md:bg-white '>
      <nav className='flex  flex-row w-full h-20 justify-start mr-52  p-6 '>
        <ul className='hidden gap-6 md:flex'>
          <li className='  w-36 -mt-4 ml-24 mr-[500px]  '>
            <a href='/'>
              <img src={logo} />
            </a>
          </li>

          <li className='li'>
            <a href='#home'>Home</a>
          </li>
          <li className='li'>
            <a href='/about'>About</a>
          </li>
          <li className='li'>
            <a href='/projects'>Projects</a>
          </li>
          <li className='li'>
            <a href='/blog'>Blog</a>
          </li>
          <li className='li'>
            <a href='#events'>Events</a>
          </li>
          <li className='li'>
            <a href='#team'>Team</a>
          </li>
          <li className='li w-20'>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </nav>

      <div
        className='absolute m-8 ml-4 z-10 text-2xl cursor-pointer flex  md:hidden'
        onClick={handleNav}>
        {!nav1 ? (
          <AiOutlineClose className=' text-[#CFCFCF]' size={25} />
        ) : (
          <div className='bg-black bg-opacity-50 p-2 text-lg rounded-3xl flex text-[#CFCFCF] gap-2 font-Overpass transition-all duration-100 hover:text-Bilos-primary hover:scale-110 ease-linear cursor-pointer'>
            <GiHamburgerMenu size={22} />
            MENU
          </div>
        )}
      </div>
      <div
        className={
          !nav1
            ? 'fixed left-0 top-0 w-[85%] md:hidden bg-black bg-opacity-50 h-full   '
            : 'ease-in duration-500 fixed  hidden'
        }>
        <ul className=' pt-2  text-[#DCAD95] uppercase'>
          <li className=' ml-[30%] w-40 m-4 mb-8  '>
            <a href='/'>
              <img src={logo} />
            </a>
          </li>

          <li className='li p-4'>
            <a href='#home'>Home</a>
          </li>
          <li className='li p-4'>
            <a href='/about'>About</a>
          </li>
          <li className='li p-4'>
            <a href='/projects'>Projects</a>
          </li>
          <li className='li p-4'>
            <a href='/blog'>Blog</a>
          </li>
          <li className='li p-4'>
            <a href='#events'>Events</a>
          </li>
          <li className='li p-4'>
            <a href='#team'>Team</a>
          </li>
          <li className='li p-4'>
            <a href='/contact'>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
