import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import HomePage from './components/HomePage'
import Services from './components/Services'

const Home: NextPage = () => {
  return (
    <div>
      
      <HomePage/>
      <AboutMe/>
      <Experience/>
      <Services/>
      <ContactMe/>
    </div>
  )
}

export default Home
