import NavBar from '../NavBar/NavBar';
import { MdSlowMotionVideo } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
function Home() {
  return (
    <div
      className="relative flex bg-center
    bg-[url('https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] 
    bg-cover h-screen bg-fixed w-full ">
      <div className='h-[100vh] w-[100%]  bg-black bg-opacity-50 '>
        <div className=''>
          <NavBar />
        </div>
        <div className=' flex justify-center '>
          <div className='flex-col items-center text-[#f8f9fa] font-Dosis portrait:mt-72 mt-32 landscape:lg:mt-72   ml-[10%] md:ml-[10%]'>
            <h1 className=' flex justify-center mb-2 md:text-8xl text-5xl'>
              IDHM ETHIOPIA
            </h1>
            <h1 className=' text-2xl flex justify-center md:text-3xl text-[#CFCFCF]'>
              Home of Humanitarians
            </h1>
            <div className='flex-wrap gap-3 flex justify-center md:flex font-Overpass my-16 md:my-5'>
              <button
                className=' bg-opacity-5 hover:shadow-sm hover:shadow-idhm-orange  bg-idhm-orange flex p-3 mb-5 md:mb-0 md:mr-10 
              border-[1px] text-idhm-orange border-idhm-orange hover:transition-all hover:ease-in-out hover:delay-75 border-opacity-50 hover:bg-opacity-20 hover:text-white'>
                <MdSlowMotionVideo size={25} className='mr-2' />
                Watch Our Video
              </button>
              <button
                className=' bg-opacity-5 hover:shadow-sm hover:shadow-idhm-blue  bg-idhm-blue flex p-3 mb-5 md:mb-0 md:mr-10 
              border-[1px] text-idhm-blue border-idhm-blue hover:transition-all hover:ease-in-out hover:delay-75 border-opacity-50 hover:bg-opacity-20 hover:text-white'>
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
