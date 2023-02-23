import { useState } from 'react';
import './Events.css';
import eventsList from './EventsData';

function Events() {
  return (
    <div className='h-screen md:flex p-20'>
      {eventsList.map((event) => (
        <div className='eventCard '>
          <div className='eventText '>
            <h1>{event.title}</h1>
          </div>
          <div className='eventPicture'>
            <img className='w-full h-full' src={event.img} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Events;
