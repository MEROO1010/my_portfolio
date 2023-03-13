import type { NextPage } from 'next'
import AboutMe from './components/AboutMe'
import HomePage from './components/HomePage'

const Home: NextPage = () => {
  return (
    <div>
      <HomePage/>
      <AboutMe/>
    </div>
  )
}

export default Home
