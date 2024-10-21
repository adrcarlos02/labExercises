import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import MainDoctors from '../components/MainDoctors'

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <MainDoctors />
    </div>
  )
}

export default Home