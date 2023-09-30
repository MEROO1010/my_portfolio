import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import HomePage from './components/HomePage'
import Services from './components/Services'
import { motion, useScroll } from 'framer-motion'

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div>
       <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      >
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
