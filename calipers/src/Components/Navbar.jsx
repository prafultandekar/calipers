import React from 'react'
import { Link} from 'react-router-dom'
import style from "../style.module.css"
function Navbar() {
  return (
    <div className={style.nav}>
 
   <Link to="/" >HOME</Link>
        <Link to="/men" >OUR STORY</Link>
        <Link to="/hydo"> HYDROPONIC FARM</Link>
        <Link to="/service"> SERVICES</Link>
       

    </div>
  )
}

export default Navbar