import { Chat, Event, Group, PlayCircleFilledOutlined, RssFeed } from '@material-ui/icons'
import React from 'react'
import { Users } from '../../DummyData'
import FriendsList from '../FriendsList/FriendsList'
import './Left.css'


function Left() {
  return (
    <div>
    <div className='sidebar'> 
    <div className='sidebarWrapper'>
        <ui className='sidebarList'>
            <li className='sidebarListItem'>
                <RssFeed className='sidebarListIcon' />
                <span className='sidebarListItemText'>Feed</span>
            </li>
            <li className='sidebarListItem'>
                <Chat className='sidebarListIcon' />
                <span className='sidebarListItemText'>Chats</span>
            </li>
            <li className='sidebarListItem'>
                <PlayCircleFilledOutlined className='sidebarListIcon' />
                <span className='sidebarListItemText'>Videos</span>
            </li>
            <li className='sidebarListItem'>
                <Group className='sidebarListIcon' />
                <span className='sidebarListItemText'>Groups</span>
            </li>
            <li className='sidebarListItem'>
                <Event className='sidebarListIcon' />
                <span className='sidebarListItemText'>Events</span>
            </li>
        </ui>
        <button className='sidebarButton'>More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
           {Users.map((u)=>(
            <FriendsList key={u.id} user={u}/>
           ))}
        </ul>
    </div>
    </div>
    </div>
  )
}

export default Left