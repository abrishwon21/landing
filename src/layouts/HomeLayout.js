import React from 'react';

import {motion} from 'framer-motion'
import Footer from '../components/layout/footer/footer';
import Header from '../components/layout/header/Header';
import Home from '../views/home/Home';

const HomeLayout = () => (
  <motion.div
  initial={{opacity:0} } 
  animate={{opacity:1}}
  exit={{opacity:0, transition: {duration: 0.5}}}
  >
 

    <Home/>
  
    
  </motion.div>
);

export default HomeLayout;  