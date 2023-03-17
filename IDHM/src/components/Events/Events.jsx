import { MdEvent } from 'react-icons/md';
import { MdComment } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdNavigateNext } from 'react-icons/md';
import './Events.css';

const Events = (props) => {
  const events = props.events;
  return (
    <div>
      <div className=' mt-24 mx-24 px-4'>
        <h1 className='flex gap-2 font-semibold'>
          <MdEvent className=' text-idhm-orange' size={40} />
          <div className='border-l-4 px-4 font-Dosis  text-4xl  border-[#0E6DB4]'>
            {' '}
            Events{' '}
          </div>
        </h1>
      </div>

      <div className=' p-10 sm:p-20 sm:grid sm:gap-y-12 landscape:lg:grid-cols-3'>
        {events.map((event) => (
          <div className='eventCard glass '>
            <a href='' className='eventPicture'>
              <img className='' src={event.img} />
            </a>
            <div className='eventText '>
              <div className='m-4 gap-6 text-[#CFCFCF] font-Overpass flex '>
                <a href='' className='flex gap-2'>
                  <MdEvent className='text-idhm-orange' size={19} />
                  {event.date}
                </a>
                <a href='' className='flex gap-2'>
                  <MdComment className='mt-1' />
                  {event.comments}
                </a>
              </div>
              <a
                href=''
                className=' m-4 font-Dosis text-xl hover:text-idhm-orange font-medium'>
                {event.title}
              </a>
              <div className='flex-wrap text-[#CFCFCF] font-Overpass m-4 gap-6 '>
                <h2 className='flex my-2 gap-2'>
                  <BiTimeFive
                    size={19}
                    className='text-idhm-orange'
                  />
                  {event.time}
                </h2>
                <h2 className='flex my-2 gap-2'>
                  <TfiLocationPin
                    size={19}
                    className='text-idhm-orange '
                  />
                  {event.venue}
                </h2>
              </div>
              <div className='m-4 text-[#CFCFCF] font-Overpass'>
                <h2>{event.description}</h2>
              </div>
              <button className=' animate-pulse text-idhm-orange flex m-4 font-Overpass'>
                Join Event <MdNavigateNext size={22} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
