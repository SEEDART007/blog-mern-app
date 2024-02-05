import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Design from './Design.css'
import graphic from './graphic.json'
import { FontAwesomeIcon, fafile} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import here from './here.json'
import Updation from './UpdationImg.json'
import tick from './tick.json'

function Update(props) {
    const[name,setName]=useState('')
    const[content,setContent]=useState('')
    const[title,setTitle]=useState('')
    let header=document.getElementById('headerId')
    let header1=document.getElementById('inti')
    header.innerHTML="Update Your Data"
    header.style.color="#FB8122"
    header1.style.backgroundColor="#4A5FC1"
    let body=document.getElementById('body')
    body.style.backgroundColor="#D6A3FB"
    const updateMyBlog=(id)=>{
    let data={
        title,
        name,
        content

     }
     axios.put(`https://blog-mern-app.onrender.com/blogs/${id}`,data);
     window.location.reload();

    }
    
  return (
    <div className='blog' id='kui'>
    <div className='container'>
  
    <h1 className='title'>Edit Title→</h1>
  <input placeholder='Blog Title' id='yourtitle' className='text-box1' type="text"  name={name} onChange={e=>setName(e.target.value) }/>
  <h2 id='you'>Edit Your Name→</h2>
 
  <input id='yourtitle1'title={title}   onChange={e=>setTitle(e.target.value)    }  className='text-box1' type="text" /><br/>
  </div>
  <div className='newint'>
  <h2 className='h2class'>Edit Your Blog Here</h2><Lottie className='newint' animationData={here}/></div>
  <div className='graphic'>
  <textarea placeholder='//Type From Here' id='blogid2' className='text-box1' type="text"  content={content}  onChange={e=>setContent(e.target.value)   }/><Lottie className='enimation' animationData={Updation}/></div>
  <button className='btn1' onClick={()=>updateMyBlog(props.id)}>UPDATE BLOG</button>
</div>
  )
}

export default Update
