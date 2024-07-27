import './App.css'
import { PayoutHeader } from './components/PayoutHeader'
import { PayoutContent } from './components/PayoutContent'
import { Heart, Menu } from 'lucide-react'
import { NavBar } from './components/NavBar'
import { useEffect, useState } from 'react'

function App() {
  
  return (
    <div className='relative'>
    <div className='absolute hidden md:block h-screen inset-0 z-[99999]'>
      <NavBar />
    </div>
    <div className='md:pl-[17em]'>
      <PayoutHeader></PayoutHeader>
      <PayoutContent></PayoutContent>
      <div className='text-center text-gray-500 text-md font-medium py-5 flex gap-2 items-center justify-center'>Made with <span><Heart className='fill-red-600 stroke-none' /> </span> By <span className='text-gray-500 underline font-medium'>Kanishk Mogalraj</span></div>
    </div>
    </div>
  )
}

export default App
