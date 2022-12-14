import { EmojiEmotions, Label, PermMedia, Room } from '@material-ui/icons'
import React from 'react'
import './Share.css'

function Share() {
  return (
    <div>
        <div className='share'>
            <div className='shareWrapper'>
                <div className='shareTop'>
                    <img className='shareProfileImg' src='photo/profile/1.jpg' alt='' />
                    <input placeholder='Videos and Photos' className='shareInput'/>
                </div>
                <hr className='shareHr'/>
                   <div className='shareBottom'>
                       <div className='shareOptions'>
                        <div className='shareOption'>
                          <PermMedia htmlColor='red'  className='shareIcon' />
                          <span className='shareOptionText'>Photo or Video</span>
                        </div> 
                        <div className='shareOption'>
                          <Label  htmlColor='blue' className='shareIcon' />
                          <span className='shareOptionText'>Tag</span>
                        </div> 
                        <div className='shareOption'>
                          <Room  htmlColor='green' className='shareIcon' />
                          <span className='shareOptionText'>Location</span>
                        </div> 
                        <div className='shareOption'>
                          <EmojiEmotions htmlColor='goldenrod'  className='shareIcon' />
                          <span className='shareOptionText'>Feeling</span>
                        </div> 
                       </div>
                       <button className='sharebutton'>Share</button>
                   </div>
                <div className='shareBottom'></div>
            </div>
        </div>
    </div>
  )
}

export default Share