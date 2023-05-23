import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Cards({ title , notifievent , clubname , img , id} : { id: any; title: string; notifievent: string; clubname: string; img: string; }) {


  const router = useRouter()

  const handleclick =()=>{
    router.push('/events/'+id)

  }
  
  //console.log(id)

  return (
    <div className='border-2 border-black w-64 h-64 rounded-xl p-3 flex flex-col gap-14 bg-pink-300 hover:cursor-pointer' 
    onClick={handleclick} key={id} >
      <div className="text-2xl">{title}</div>
      <div className='border-2 border-slate-500 p-3 bg-white text-slate-500 text-xs'>
        {notifievent}
      </div>
      <div className='flex gap-10 justify-between p-1'>
        <div>
          {clubname}
        </div>
        <div>
          <img src="" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Cards