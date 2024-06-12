"use client"
import React from 'react'
import Navanimes from '../../../components/animes/Navanimes'
import Home from '../../../components/animes/Home'
function page() {
  return (
    <div className='flex flex-col gap-4'>
        <Navanimes/>
        <Home/>
    </div>
  )
}

export default page