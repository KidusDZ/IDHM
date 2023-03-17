import './App.css';
import Blog from './components/Blog/Blog';
import BlogData from './components/Blog/BlogData';
import Events from './components/Events/Events';
import EventsData from './components/Events/EventsData';
import Home from './components/Landing Page/Home';

function App() {
  return (
    <div className=" bg-cover bg-no-repeat bg-[url('https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')] ">
      <Home />
      <EventsData />
      <BlogData />
    </div>
  );
}

export default App;
