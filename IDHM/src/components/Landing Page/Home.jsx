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
        <div className=' flex-wrap '>
          <div className='flex-col text-[#f8f9fa] font-Dosis mt-72 ml-[10%] md:ml-[10%]'>
            <h1 className='  mb-2 md:text-8xl text-6xl'>
              IDHM ETHIOPIA
            </h1>
            <h1 className=' text-3xl md:text-4xl text-gray-700'>
              Home of Humanitarians
            </h1>
            <div className='flex-wrap md:flex font-Overpass  my-5'>
              <button className='bg-[#F79022] flex p-3  md:mr-10 border-2 hover:text-[#F79022] border-[#F79022] hover:bg-opacity-0'>
                <MdSlowMotionVideo size={25} className='mr-2' />
                Watch Our Video
              </button>
              <button className=' flex bg-[#0E6DB4] p-3 mr-10 border-2 hover:text-[#0E6DB4] border-[#0E6DB4] hover:bg-opacity-0'>
                <GoPerson size={20} className='mr-2' />
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
