import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogStyle from './BlogStyle'
import Design from './Design.css'
function GetBlogs() {
    const[data,setData]=useState([])
    useEffect(()=>{
        getBlogs();
    },[])
    const getBlogs=async()=>{
       const newItem=await axios.get('https://blog-mern-app.onrender.com/blogs')
       setData(newItem.data.data)
    }
  
  return (
    
    <div className='getit'>
      {
        data&&data.map((ele)=>{
         
            return(<BlogStyle id={ele._id} title={ele.name} name={ele.title} content={ele.content}/>

            )
      }
      )}
      </div>
  )}

export default GetBlogs
