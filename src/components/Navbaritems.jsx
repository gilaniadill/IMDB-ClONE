'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const Navbaritems = ({title, param}) => {

      const searchParam = useSearchParams();
      const genre = searchParam.get('genre');

  return (
    <>
        <Link className={`hover:text-amber-600
          font-normal
          ${genre===param?
          'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':''}`} 
          href={`/?genre=${param}`}>{title}</Link>
    </>
  )
}

export default Navbaritems