import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer/Footer';
import "./app.css"

const Home = lazy(() => import('./Pages/Home'));
const Services = lazy(() => import('./Pages/Services')); // Fixed variable name
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} /> {/* Fixed variable name */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
