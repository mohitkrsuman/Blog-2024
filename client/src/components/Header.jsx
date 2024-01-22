import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='border-b-2'>
       <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold'>
           <span>AutoBlog</span>
       </Link>
    </Navbar>
  )
}

export default Header