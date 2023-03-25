import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
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
    </div>
  )
}

export default Home
