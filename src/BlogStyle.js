import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Design from './Design.css'
import { FontAwesomeIcon, fafile} from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Update from './Update'



function BlogStyle(props) {
  const[update,setUpdate]=useState(false)
  const[currId,setCurrId]=useState()

  const navigate=useNavigate();
  const deleteElem=async(id)=>{
    axios.delete(`https://blog-mern-app.onrender.com/delete/${id}`)
    window.location.reload();
}


const updateBlog=(id)=>{
  setUpdate(true)
  setCurrId(id)
   console.log("clicked")
}

  
  return (
<div>
{
(() => {
  if(update) {
    return (<Update id={currId} name={props.name} title={props.title} content={props.content}/> );
  }else{
     return(  <div  className='getBlog'>
    
 
     <FontAwesomeIcon onClick={()=>deleteElem(props.id)} id='iconId' icon={faTrash} />
      <FontAwesomeIcon id='iconId1' onClick={()=>updateBlog(props.id)} icon={faPenToSquare}/>
      
      <h1 className='heading'>{props.title}  </h1>
      <p className='content'>{props.content}</p>
      <h3 className='by'>By {props.name}</h3>

    </div>)
  }
})()
}
</div>
    // <div className='getBlog'>
    
      
    // ( <FontAwesomeIcon onClick={()=>deleteElem(props.id)} id='iconId' icon={faTrash} />
    //   <h1 className='heading'>{props.title}  </h1>
    //   <FontAwesomeIcon onClick={()=>updateBlog(props.id)} icon={faPenToSquare}/>
    //   <p className='content'>{props.content}</p>
    //   <h3 className='by'>By {props.name}</h3>

    // </div>
  )
}

export default BlogStyle

