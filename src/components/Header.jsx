import React from 'react'
import Menu from './Menu'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle } from 'react-icons/ai'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <>
        <div className="navbar flex justify-between items-center max-w-6xl p-3 mx-auto">
            <div className="nav-left flex gap-5">
                <Menu title='home' address='/' Icon={AiFillHome}/>
                <Menu title='about' address='/about' Icon={AiFillInfoCircle}/>
                    
            </div>

            <div className="nav-right flex items-center gap-5">
              <DarkModeSwitch/>
            <Link href={'/'} className=" flex items-center">
                <span className='bg-amber-500 px-2 py-1 rounded-lg text-xl font-bold' >IMDB</span>
                <span className='hidden sm:inline text-xl'>Clone</span>

            </Link>
            </div>

        </div>
    </>
  )
}

export default Header