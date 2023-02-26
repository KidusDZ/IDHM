import NavBar from '../NavBar/NavBar';
import { MdSlowMotionVideo } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
function Home() {
  return (
    <div
      className="relative flex bg-center
    bg-[url('https://themewagon.github.io/unicare/images/bg_3.jpg')] 
    bg-cover h-screen bg-fixed w-full ">
      <div className='h-[100vh] w-[100%]  bg-black bg-opacity-50 '>
        <div className='fixed  z-10'>
          <NavBar />
        </div>
        <div className=' flex justify-center '>
          <div className='flex-col text-[#f8f9fa] font-Dosis mt-72 ml-[10%] md:ml-[10%]'>
            <h1 className=' flex justify-center mb-2 md:text-8xl text-6xl'>
              IDHM ETHIOPIA
            </h1>
            <h1 className=' text-3xl flex justify-center md:text-3xl text-[#CFCFCF]'>
              Home of Humanitarians
            </h1>
            <div className='flex-wrap flex justify-center md:flex font-Overpass  my-5'>
              <button
                className=' bg-opacity-5 bg-[#F79022] flex p-3 mb-5 md:mb-0 md:mr-10 
              border-[1px] text-[#F79022] border-[#F79022] hover:transition-all hover:ease-in-out hover:delay-75 border-opacity-50 hover:bg-opacity-20 hover:text-white'>
                <MdSlowMotionVideo size={25} className='mr-2' />
                Watch Our Video
              </button>
              <button
                className=' flex bg-opacity-5 bg-[#0E6DB4] p-3 mr-10 border-opacity-50  text-[#0E6DB4] 
                hover:bg-opacity-20 hover:transition-all hover:ease-in-out hover:delay-75
              border-[#0E6DB4] border-[1px]  hover:text-white'>
                <GoPerson size={20} className='mr-2 ' />
                Become A Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
