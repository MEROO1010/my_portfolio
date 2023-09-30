import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import HomePage from './components/HomePage'
import Services from './components/Services'
import { motion, useScroll, useSpring } from "framer-motion";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
        <motion.div className="progress-bar" style={{ scaleX }} >
      <HomePage/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <ContactMe/>
      </motion.div>
    </div>
  )
}

export default Home
