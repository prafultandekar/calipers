import React from 'react'
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import style from "../style.module.css"
import axios from 'axios';

const Home = () => {

  const [home,setHome]=useState([])
  useEffect(()=>{
  
   axios.get(`http://localhost:8080/men`)
  // .then ((r)=>r.json())
   .then((res)=>{
       setHome(res.data);
      //  console.log(res)
      
   });
   },[]);
  return (
    <>
    
    <div>
      
      <div className={style.main2}>
    {
      home.map((el)=>(
       <div className={style.main3} key ={el.id}>
         <img className={style.img} src={el.image}/>
        
        
       </div>
      ))
    }
    
    </div>
    </div>
    </>

    
  )
}

export default Home