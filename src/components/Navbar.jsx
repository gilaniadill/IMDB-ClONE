import React from 'react'
import Navbaritems from './Navbaritems'


const Navbar = () => {
  return (
    <>
      <div className="flex 
      justify-center
      p-4 
      gap-4 
      lg:text-lg 
      dark:bg-gray-600
      bg-amber-100">
        <Navbaritems title="Trending" param="fetchTrending"/>
        <Navbaritems title="Top Rated" param="fetchTopRated"/>
      </div>
    </>
  )
}

export default Navbar