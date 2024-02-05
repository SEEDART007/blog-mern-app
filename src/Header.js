import React, { useState } from 'react'
import Design from './Design.css'
import Blogid from './Animation.json'
import PropTypes from 'prop-types'
import axios from 'axios'
import Lottie from 'lottie-react'

function Header(props) {
  return (
    <div id='inti' className='header'>
    <Lottie className='animation' animationData={Blogid}/>   <h1 id='headerId' className='hui'>BLOGERZZ</h1>
    <div className='vir'>
    <a href='/getblogs'>💠SHOWBLOGS</a>
    <a href='/'>💠Write A Blog</a>
    </div>
    </div>
  )
}

export default Header
