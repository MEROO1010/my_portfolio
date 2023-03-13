import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import HomePage from './components/HomePage'

const Home: NextPage = () => {
  return (
    <div>
      <HomePage/>
      <AboutMe/>
      <Experience/>
    </div>
  )
}

export default Home
