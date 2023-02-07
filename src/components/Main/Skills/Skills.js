import React from 'react'
import SkillIcons from './Icons'

function SkillsSection() {
  return (


<div className="pt-16 pb-16 h-auto min-h-screen font-primary">
        <div className="flex flex-col justify-center items-center">
          <div className="w-full text-center lg:w-7/12 lg:text-left pl-0 lg:pl-20">
            <div className="w-full lg:w-2/3">
              <h1 className="mb-4 text-7xl font-semibold text-gray-750">Skills</h1>
              <p className="text-sm sm:text-5xl text-grey-700 leading-none mb-6">
                Technologies I Have Used
              </p>
              <div className="flex flex-row justify-center lg:justify-start items-end">

              </div>
            </div>
          </div>
          <div className="ml-auto w-full px-10 lg:px-20 lg:w-5/12 h-auto">
           <SkillIcons/>
          </div>
        </div>
      </div>



    )
}

export default SkillsSection