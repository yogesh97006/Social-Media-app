import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './Feed.css'
import { Posts } from '../../DummyData'
function Feed() {
  return (
    <div>
       <div className='Feed'>
        <div className='FeedWrapper'>
           <Share />
           {Posts.map((p)=>(
            <Post key={p.id} post={p}/>
            ))}
        </div>
       </div>
    </div>
  )
}

export default Feed