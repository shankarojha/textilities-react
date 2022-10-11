import React from 'react'
import profilePicture from '../img/me.png'

export default function About(props) {
  return (
    <>
      <div className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className='row'>
          <div className='col-lg-12 d-flex flex-column align-items-center justify-content-center'>
            <h1>About the developer</h1>
          </div>
          <div className='col-lg-3 d-flex flex-column align-items-center justify-content-center devImage'>
            <div><img style={{borderRadius:'50%'}} src={profilePicture} alt='dev'></img></div>
            <div><h6>Shankar Ojha</h6></div>
          </div>
          <div className='col-lg-9 d-flex flex-column align-items-center justify-content-center'>
            <h6>Started his career as a Civil Engineer in Jamshedpur, now working as Software Developer at Knowledgeworks in Bangalore, has gone through many nights of learning and patience to reach this stage in life where he wants to learn React and aid his Company's new project of TMS and develop himself further. Yet he needs to learn so many things to be what he really wants to be "A better Developer".</h6>
          </div>
        </div>
      </div>
    </>
  )
}
