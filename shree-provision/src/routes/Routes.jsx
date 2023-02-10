import React from 'react'

import { Route,Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

const mainRoutes = () => {
  return (
    <Routes>

       <Route path="/" element={ <Home/>}> </Route>
       <Route path="/signup" element={ "jhdfsdjf"}>   </Route>
       <Route path="/login" element={ "jhdfsdjf"}>    </Route>
       <Route path="/admin" element={ "jhdfsdjf"}>    </Route>
       <Route path="/dashbord" element={ "jhdfsdjf"}> </Route>
       <Route path="/single-product" element={ "jhdfsdjf"}> </Route>
    </Routes>
  )
}

export default mainRoutes
