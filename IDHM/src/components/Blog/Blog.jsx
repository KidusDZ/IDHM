import { TfiWrite } from 'react-icons/tfi';
const Blog = (props) => {
  const blogs = props.blogs;
  console.log(props, blogs);
  return (
    <div>
      {blogs.map((blog) => (
        <div>
          <div className=' border-l-4 font-Dosis m-24 text-4xl px-4 border-[#0E6DB4] '>
            <h1>{blog.header} </h1>
          </div>
          <div className='w-full'>
            <div className='flex-wrap glass  overflow-hidden  transition-all  duration-300 delay-300 h-[65%] hover:h-[80%] lg:hover:w-[80%] w-[65%] p-1 lg:hover:p-6 -mt-16 m-20 relative'>
              <div
                style={{ backgroundImage: `url(${blog.img})` }}
                className=' group 
             bg-cover bg-center h-[350px] lg:h-96 w-[100%]  lg:hover:w-[65%] transition-all  duration-300  '>
                <div
                  className=' absolute   lg:w-96  border-2 lg:top-[15%] p-8 overflow-auto  transition-all duration-500 justify-center lg:left-[60%]
               h-[65%] lg:opacity-0  group-hover:opacity-100 shadow-lg text-[#CFCFCF] shadow-idhm-orange scrollbar-thumb-idhm-orange scrollbar-thin font-Overpass bg-idhm-orange bg-opacity-40 border-idhm-orange '>
                  <div className='flex overflow-visible justify-center items-center '>
                    <div
                      style={{
                        backgroundImage: `url(${blog.profilePic})`,
                      }}
                      className=' mb-4 rounded-full w-24 h-24 z-10 bg-center bg-cover'></div>
                    <div className=' flex-col w-52 p-2 -ml-8 pl-12 rounded-lg bg-white'>
                      <div className=' text-black'>{blog.writer}</div>
                      <div>{blog.role}</div>
                    </div>
                  </div>
                  <div className='flex gap-2 my-4 text-black text-xl'>
                    <TfiWrite className='text-idhm-blue' size={25} />
                    {blog.title}
                  </div>
                  <div>{blog.description}</div>
                  <button
                    className='bg-opacity-60 hover:bg-opacity-100 shadow-sm shadow-idhm-blue  bg-idhm-blue flex p-2 m-4
              border-[1px]  border-idhm-blue hover:transition-all hover:ease-in-out hover:delay-75 border-opacity-50  text-white'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
