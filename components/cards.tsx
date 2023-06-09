import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion'

function Cards({ title , notifievent , clubname , img , id} : { id: any; title: string; notifievent: string; clubname: string; img: string; }) {


  const router = useRouter()

  const handleclick =()=>{
    router.push('/events/'+id)

  }
 
  

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
      }}

    className=' w-64 h-64 rounded-xl p-3 flex flex-col gap-14 bg-slate-500 hover:cursor-pointer  tracking-wide ease-in-out ' 
    onClick={handleclick} key={id} >
      <div className="text-2xl text-white">{title}</div>
      <div className='border-2 border-slate-500 p-3 bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg text-black text-xs z-20'>
        <span className='z-10'>
        {notifievent} 
        </span>
      </div>
      <div className='flex gap-10 justify-between p-1'>
        <div>
          {clubname}
        </div>
        <div className='-translate-y-6'>
          <img src={img} alt="image" className='rounded-full w-14 ' />
        </div>
      </div>
    </motion.div>
  )
}

export default Cards


