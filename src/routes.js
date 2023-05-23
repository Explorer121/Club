import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footers from './Components/header_footer/Footers'
import Headers from './Components/header_footer/Headers'
import HomePage from './Components/Home/index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Admin/Dashboard'
import { AuthGuard } from './Hoc/Auth'
import SignIn from './Components/Signin'

const Routers = ({ user }) => {

  console.log(user)
  return (
    <BrowserRouter>
    <Headers user={user}/>
      <Routes>
        <Route path="/dashboard" exact element={AuthGuard(Dashboard )} />
        <Route path="/sign_in" exact element={props => (<SignIn {...props} user={user} />) } />
        <Route path="/" element={<HomePage/>} />
      </Routes>
      <ToastContainer />
    <Footers />
    </BrowserRouter>
  )
}

export default Routers
