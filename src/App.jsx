
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import Footer from './components/Footer'
import { useContext, useEffect } from 'react'
import { tokenAuthContext } from './contexts/AuthContextAPI'



function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  useEffect(()=>{
    if(sessionStorage.getItem("token"))
      {
        setIsAuthorised(true)
      }else{
        setIsAuthorised(false)
      }
  },[isAuthorised])
  console.log(isAuthorised);
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {
          isAuthorised && 
          <Routes>
            <Route path='/dashboard' element={<Dashboard/> }/>
            <Route path='/projects' element={<Project/>}/>
          </Routes>
        }
        {/* <Route path='/dashboard' element={isAuthorised?<Dashboard/> : <Navigate to={'/login'}/>}/>
        <Route path='/projects' element={isAuthorised?<Project/> : <Navigate to={'/login'}/>}/> */}
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth insideRegister = {true}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
