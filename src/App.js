import React from 'react'
import Content from './Content'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import GetBlogs from './GetBlogs'
import Header from './Header'

function App() {
  return (
    <div>
       <Header/>
      <BrowserRouter >
      <Routes>
      <Route path='/getblogs' element={<GetBlogs/>}/>
      <Route path='/' element={<Content/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

