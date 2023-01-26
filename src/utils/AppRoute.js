import React from 'react';


import {  Routes, Route,useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion'


import HomeLayout from '../layouts/HomeLayout';
import AboutLayout from '../layouts/AboutLayout';
import ServiceLayout from '../layouts/ServiceLayout';
import IndustryLayout from '../layouts/IndustryLayout';
import ContactLayout from '../layouts/ContactUsLayout';

const AppRoute = () => {
  const location=useLocation();
  
    return (
     <AnimatePresence>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/service" element={<ServiceLayout />} />
      <Route path="/industries" element={<IndustryLayout />} />
      <Route path="/about" element={<AboutLayout />} />
      <Route path="/contact" element={<ContactLayout />} />
    </Routes>

      </AnimatePresence>

    );
  }
  
  export default AppRoute;