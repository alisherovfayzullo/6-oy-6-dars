import React from 'react'
import {BarLoader} from "react-spinners";
function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <BarLoader color='#5CA5A5' />
  
  </div>
  )
}

export default Loading
