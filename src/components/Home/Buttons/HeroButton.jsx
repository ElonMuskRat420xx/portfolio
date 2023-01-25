import React from 'react'

import Link from 'next/link'

function HeroButton() {
  return (

<div className="flex gap-[2rem] mt-6 sm:mb-6">
  <div className="sm:col-span-1 xl:col-span-1">
    <button type="button" className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    bg-[#7EC7A2] text-[#1e222a] hover:outline-none hover:bg-transparent hover:text-[#7EC7A2] hover:border-[#7EC7A2] focus:outline-none
                   ">Know More</button>
  </div>
  <div className="sm:col-span-1 xl:col-span-1">
    <Link href="https://cv.glk-nelson.xyz">
    <button type="button" className="font-regular
                    px-6 sm:px-4 xl:px-6 py-4 w-64 sm:w-52 md:w-56 2xl:w-60 text-7xl h-25 transition-all
                    rounded overflow-hidden border-2 border-transparent
                    text-[#7EC7A2] bg-transparent border-[#7EC7A2] hover:outline-none hover:bg-[#7EC7A2] hover:text-[#1e222a] hover:border-[#7EC7A2] focus:outline-none
                   ">Download Resume</button>
    </Link>
  </div>
</div>
    )
}

export default HeroButton