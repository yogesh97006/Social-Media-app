import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Left from '../../components/SideBar/Left'
import Right from '../../components/SideBar/Right'
import Feed from '../../components/Feed/Feed'

function Home() {
  return (
    <div>
        <Navbar />
        <div className='homeContainer'>
            <Left />
            <Feed />
            <Right />
        </div>
    </div>
  )
}

export default Home