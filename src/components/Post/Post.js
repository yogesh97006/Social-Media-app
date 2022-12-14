import React, { useState } from 'react'
import './Post.css'
import like from '../../assets/Icons/like.png'
import heart from '../../assets/Icons/heart.png'

import {Users} from '../../DummyData'

function Post({post}) {
 
    const [Like,setLike]=useState(post.like)
    const [IsLike,setIsLike]=useState(false)

    const handleChange=()=>{
        setLike(IsLike?Like-1:Like+1)
        setIsLike(!IsLike)
    }

    return (
    <div>
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img src={
                            Users.filter((u)=>u.id===post?.userId)[0].profilePicture
                        } alt='' className='postProfileImg' />
                        <span className='postUsername'>{
                            Users.filter((u)=>u.id===post?.userId)[0].username
                        }</span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight' >
                       
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post.desc}</span>
                    <img className='postImg' src={post.photo} alt=''/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='likeIcon' src={like} onClick={handleChange} alt=''/>
                        <img className='likeIcon' src={heart} onClick={handleChange}  alt=''/>
                        <span className='postLikeCounter'>{Like} people like it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post