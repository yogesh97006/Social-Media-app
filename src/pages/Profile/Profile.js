import React from 'react'
import './Profile.css'
import Navbar from '../../components/Navbar/Navbar'
import Left from '../../components/SideBar/Left'
import Feed from '../../components/Feed/Feed'
import Right from '../../components/SideBar/Right'
function Profile() {
  return (
    <div>
    <Navbar />
    <div className='profile'>
      <Left />
      <div className='profileRight'>
      <div className='profileRightTop'>
        <div className='profileCover'>
        <img
          className='profileCoverImg'
          src='photo/img1.jpg'
          alt=''
        />
        <img
        className='profileUserImg'
        src='photo/profile/1.jpg'
        alt=''
         />
        </div>
        <div className='profileInfo'>
          <h4 className='profileInfoName'>Virat Kohli</h4>
          <span className='profileInfoDesc'>Hello My Friends !  :)</span>
        </div>
      </div>
      <div className='profileRightBottom'>
        <Feed />
        <Right profile/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Profile