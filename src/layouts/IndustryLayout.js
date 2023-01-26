import React from 'react';

import {motion} from 'framer-motion'
import Footer from '../components/layout/footer/footer';
import Industry from '../views/industry/industry';




const IndustryLayout = () => (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0, transition: {duration: 0.5}}}
  >
    
   <Industry/>
    
  </motion.div>
);

export default IndustryLayout;  