import { useState } from 'react';
import { MdEvent } from 'react-icons/md';
import { MdComment } from 'react-icons/md';
import { BiTimeFive } from 'react-icons/bi';
import { TfiLocationPin } from 'react-icons/tfi';
import { MdNavigateNext } from 'react-icons/md';
import './Events.css';
import eventsList from './EventsData';

function Events() {
  return (
    <div className='h-screen  p-10 md:p-20 md:grid md:gap-y-12 md:grid-cols-3'>
      {eventsList.map((event) => (
        <div className='eventCard glass '>
          <a href='' className='eventPicture'>
            <img className='' src={event.img} />
          </a>
          <div className='eventText '>
            <div className='m-4 gap-6 text-[#CFCFCF] font-Overpass flex '>
              <a href='' className='flex gap-2'>
                <MdEvent className='text-[#F79022]' size={19} />
                {event.date}
              </a>
              <a href='' className='flex gap-2'>
                <MdComment className='mt-1' />
                {event.comments}
              </a>
            </div>
            <a
              href=''
              className=' m-4 font-Dosis text-xl hover:text-[#F79022] font-medium'>
              {event.title}
            </a>
            <div className='flex-wrap text-[#CFCFCF] font-Overpass m-4 gap-6 '>
              <h2 className='flex my-2 gap-2'>
                <BiTimeFive size={19} className='text-[#F79022]' />
                {event.time}
              </h2>
              <h2 className='flex my-2 gap-2'>
                <TfiLocationPin
                  size={19}
                  className='text-[#F79022] '
                />
                {event.venue}
              </h2>
            </div>
            <div className='m-4 text-[#CFCFCF] font-Overpass'>
              <h2>{event.description}</h2>
            </div>
            <button className=' animate-pulse text-[#F79022] flex m-4 font-Overpass'>
              Join Event <MdNavigateNext size={22} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
