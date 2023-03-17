import { useState } from 'react';
import Events from './Events';

const EventsData = () => {
  const [events, setEvents] = useState([
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-1.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-2.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-3.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-2.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-3.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
    {
      title: 'World Wide Donation',
      comments: '3',
      date: 'Sep. 10, 2018',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://themewagon.github.io/welfare/images/event-1.jpg',
      time: '10:30AM-03:30PM',
      venue: 'Venue Main Campus',
    },
  ]);

  return (
    <div>
      <Events events={events} />
    </div>
  );
};

export default EventsData;
