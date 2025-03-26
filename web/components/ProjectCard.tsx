import React from 'react'
import { IoMdArrowRoundForward } from "react-icons/io";
import Image1 from "@/public/project-card1.svg";
import Image2 from "@/public/project-card2.svg";
import Image3 from "@/public/project-card3.svg";
import Image4 from "@/public/project-card4.svg";
import Image from 'next/image';

const ProjectCard = () => {
  return (
    <div className='w-60 h-44 border rounded-2xl p-4'>
        <div className='flex items-center justify-between mb-9'>
            <p className='font-manrope text-projsync-green font-medium text-[18.93px]'>OrionPay</p>
            <IoMdArrowRoundForward className='text-projsync-green text-xl'/>
        </div>

        <div className='flex space-x-2.5 mb-2'>
        <Image src={Image1} alt="profile" className="size-7" />
        <Image src={Image2} alt="profile" className="size-7" />
        <Image src={Image3} alt="profile" className="size-7" />
        <Image src={Image4} alt="profile" className="size-7" />
        </div>
        <div>
            <p className='font-manrope text-[13.88px] font-medium'>Project Lead</p>
            <p className='font-manrope text-[#768396] text-xs font-normal'>Jordan Mitchell</p>

        </div>
      
    </div>
  )
}

export default ProjectCard
