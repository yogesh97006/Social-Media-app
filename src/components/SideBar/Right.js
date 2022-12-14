import React from 'react'
import './Right.css'
import gift from '../../assets/Icons/gift.png'
import { Users } from '../../DummyData'
import Friends from '../Friends/Friends'


function Right({profile}) {
  const HomeRightbar=()=>{
  return (
    <div>
           <div className='birthdayContainer'>
            <img className='birthdayImg' src={gift} alt='' />
            <span className='birthdayText'>
              <b>Polo Foaster</b> and <b> 3 other friends </b> have a birthday to day
            </span>
           </div>
           <h4 className='rightTitle'>Online Friends</h4>
           <ul className='rightFriendList'>
                 {Users.map((u)=>(
                  <Friends key={u.id} user={u} />
                 ))}
           </ul>
         </div>
  )}

  const ProfileRightbar=()=>{
    return(
      <div>
        <h4 className='rightbarTitle'>Your Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>Delhi</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>Delhi</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>Married</span>
          </div>
        </div>
        <h4>Your Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/2.jpg' alt=''/>
            <span className='rightbarFollowingName'>Allu Arjun</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/3.jpg' alt=''/>
            <span className='rightbarFollowingName'>Narendra Modi</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/4.webp' alt=''/>
            <span className='rightbarFollowingName'>Cristiano Ronaldo</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/5.png' alt=''/>
            <span className='rightbarFollowingName'>Friends</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/6.jpg' alt=''/>
            <span className='rightbarFollowingName'>Adani</span>
          </div>
          <div className='rightbarFollowing'>
            <img className='rightbarFollowingImg' src='photo/profile/7.jpg' alt=''/>
            <span className='rightbarFollowingName'>MS Dhoni</span>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className='right'>
    <div className='rightWrapper'>
    {profile?<ProfileRightbar/>:<HomeRightbar/>}
    </div>
    </div>
  )
}

export default Right