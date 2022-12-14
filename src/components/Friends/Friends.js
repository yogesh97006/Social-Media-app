import React from 'react'
import './Friends.css'
import { Users } from '../../DummyData'

function Friends({user}) {
  return (
    <div>
        <li className='rightFriend'>
                <div className='rightProfileImageContainer'>
                <img 
                  className='rightProfileImg'
                  src={user.profilePicture}
                  alt=''
                />
                  <span className='rightOnline'></span>
                </div>
                <span className='rightUsername'>{user.username}</span>
             </li>
    </div>
  )
}

export default Friends