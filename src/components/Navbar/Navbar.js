import { Chat, Notifications, Person, Search } from '@material-ui/icons'
import './Navbar.css'
import React from 'react'


function Navbar() {
  return (
    <div className='topcontainer'>
    <div className='topleft'>
      <span className='logo'>OneWithWorld</span>
    </div>
      <div className='topcenter'>
       <div className='searchbar'>
         <Search className='searchIcon'/>
         <input placeholder='Search' className='searchInput'/>
       </div>
      </div>  
      <div className='topright'>
          <div className='toplinks'>
            <span className='toplink'>HomePage</span>
            <span className='toplink'>TimeLine</span>
          </div>
          <div className='topIcons'>
           <div className='topIconItem'>
            <Person />
            <span className='topIconBadge'>1</span>
           </div>
           <div className='topIconItem'>
            <Chat />
            <span className='topIconBadge'>2</span>
           </div>
           <div className='topIconItem'>
            <Notifications />
            <span className='topIconBadge'>1</span>
           </div>
          </div>
          <img src='photo/profile/1.jpg' alt='' className='topImg' />
      </div>
    </div>
  )
}

export default Navbar