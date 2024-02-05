import React, { useState } from 'react'
import axios from 'axios'
import Design from './Design.css'
import graphic from './graphic.json'
import { FontAwesomeIcon, fafile} from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Lottie from 'lottie-react'
import { useNavigate } from 'react-router-dom'
import here from './here.json'

function Content() {
  const navigate=useNavigate();
  const[name,setName]=useState('')
  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
    const handleBlogSave=()=>{
        const data={
            name,
          title,
          content,
        }
        axios.post('http://localhost:4000/blogs',data).then(val=>console.log(val))
        navigate("/GetBlogs")
      }
  return (
    <div className='blog'>
        <div className='container'>
      
        <h1 className='title'>Title→</h1>
      <input placeholder='Blog Title' id='yourtitle' className='text-box1' type="text" onChange={e=>setName(e.target.value)}/>
      <h2 id='you'>Your Name→</h2>
     
      <input id='yourtitle1' className='text-box1' type="text" onChange={e=>setTitle(e.target.value)}/><br/>
      </div>
      <div className='newint'>
      <h2 className='h2class'>Write Your Blog Here</h2><Lottie className='newint' animationData={here}/></div>
      <div className='graphic'>
      <textarea placeholder='//Type From Here' id='blogid2' className='text-box1' type="text" onChange={e=>setContent(e.target.value)}/><Lottie animationData={graphic}/></div>
      <button className='btn1' onClick={handleBlogSave}>POST BLOG</button>
    </div>
  )
}

export default Content
