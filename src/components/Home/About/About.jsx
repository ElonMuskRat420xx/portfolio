import Link from 'next/link'
import React from 'react'
import SocialIcons, { PaperIcon } from '../Footer/Icons'
import ContactCode from '../Contact/CodeLinks/ContactCode'


function AboutSection () {
  return (
<>

<div className="flex flex-col md:flex-row bg-gray-100 pt-10 pb-20 px-20">
  <div className="md:w-1/2 md:pr-10 py-[2rem]">
    <h1 className="text-3xl font-bold text-gray-800 my-2">About Me</h1>
    <p className="text-gray-600 my-2"> As a Mechanical Engineering undergraduate, I am passionate about exploring the many facets of engineering and technology. My interests include classic cars, finance and trading, Linux, free software, web development, and blockchain technology. I am constantly looking for new opportunities to expand my knowledge and challenge myself. I believe that technology has the potential to create a more equitable and sustainable world, and I strive to use my knowledge and skills to help make that vision a reality. </p>
    <Link href="/Resume">
    <button className="bg-gray-800 hover:bg-[#1e222a] text-white font-bold my-4 py-2 px-4 rounded-[2px] flex items-center gap-2">
      <PaperIcon /> Resume
    </button>
    <ContactCode />
    </Link>
  </div>
  <div className="md:w-1/2 md:pl-10"></div>
</div>

</>

    )
}

export default AboutSection


