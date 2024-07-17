import React, { useEffect, useState } from 'react'
import './App.css'
import {Sugar} from 'react-preloaders';

function App() {
  const [loading,setLoading]= useState(true);
  useEffect(()=>{
    const loadingdiv=()=>{
      setTimeout(()=>{
        setLoading(false);
      },4500);
    };
    loadingdiv();
  },[])
  return loading?
    (<Sugar time={4000} animation="slide-up" background="blur" color="white"/>
    ):(
      <div>
        <h1 className='m-3'>hello world</h1>
        <i className="fa-solid fa-house"></i>
      </div>
    );
}

export default App
