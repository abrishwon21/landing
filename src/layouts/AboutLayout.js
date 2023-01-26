import React from 'react';

import {motion} from 'framer-motion'
import Footer from '../components/layout/footer/footer';

import About from '../views/about/about';


const AboutLayout = () => (
  <motion.div
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0, transition: {duration: 0.5}}}
  >
    
    <main className="site-content">
    <About/>
    </main>
    
  </motion.div>
);

export default AboutLayout;  