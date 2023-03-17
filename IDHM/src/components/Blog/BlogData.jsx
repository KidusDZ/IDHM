import { useState } from 'react';
import Blog from './Blog';

const BlogData = () => {
  const [blogs, setBlogs] = useState([
    {
      header: 'My First Blog!',
      title: 'This is My Title',
      writer: 'Tigist Worku',
      role: 'Member',
      profilePic:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://images.unsplash.com/photo-1473655551229-a39d1a982885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    },
    {
      header: 'My Second Blog!',
      title: 'This is My Title',
      writer: 'Marta Worku',
      role: 'Content Creator',
      profilePic:
        'https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://images.unsplash.com/photo-1473649085228-583485e6e4d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
    },
    {
      header: 'My Third Blog!',
      title: 'This is My Title',
      writer: 'Alemu Worku',
      role: 'Research Team',
      profilePic:
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
      description:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      img: 'https://images.unsplash.com/photo-1472673630503-c6bfba62adbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    },
  ]);
  return (
    <div>
      <Blog blogs={blogs} />
    </div>
  );
};

export default BlogData;
