import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Hydro from './Hydro'
import Men from "./Man"
import Service from './Service'

function AllRoutes() {
  return (
    <div>

<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/men" element={<Men/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/hydo" element={<Hydro/>}/>
    
    
    
      
  </Routes>

    </div>
  )
}

export default AllRoutes