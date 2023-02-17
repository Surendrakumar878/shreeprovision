import React from 'react'

import { Route,Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import {Login} from '../pages/login/Login';
import {Signup} from '../pages/signup/Signup';

const MainRoutes = () => {
  return (
    <Routes>

       <Route path="/" element={ <Home/>}> </Route>
       <Route path="/signup" element={ <Signup />}>   </Route>
       <Route path="/login" element={ <Login />}>    </Route>
       <Route path="/admin" element={ "jhdfsdjf"}>    </Route>
       <Route path="/dashbord" element={ "jhdfsdjf"}> </Route>
       <Route path="/single-product" element={ "jhdfsdjf"}> </Route>
    </Routes>
  )
}

export default MainRoutes
