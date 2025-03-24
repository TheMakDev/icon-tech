import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer/Footer';


const Home = lazy(() => import('./Pages/Home/Home'));
const Services = lazy(() => import('./Pages/Services/Services'));  
const About = lazy(() => import('./Pages/About/About'));
const Blog = lazy(() => import('./Pages/Blog/Blog'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} /> 
          <Route path='/Blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
