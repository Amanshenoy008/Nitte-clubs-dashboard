import Cards from "@/components/cards"
import Head from "next/head"
import {PrismaClient} from "@prisma/client"
import {useEffect, useState } from "react"
//import dynamic from "next/dynamic"
//import { useParallax } from "react-scroll-parallax/dist/hooks/useParallax"
import { Parallax } from 'react-scroll-parallax';


//const Cards = dynamic(() => import("@/components/cards"));


export default  function Home ({events} : {events:any}) {

  const [load, setload]: any = useState(false)
 

  console.log(events)

  
  


  return (
    <>
    <Head>
        <title>Clubz-zone</title>
    </Head>
    <div className="bg-cover bg-no-repeat" style={{'backgroundImage':`url('')`}}>
    <Parallax translateX={[-40, 90]}>
    <div className=" h-screen w-screen "  >
      
    </div>
   </Parallax>
    </div>
    <div className="bg-slate-600 h-screen w-screen">
    <Parallax translateX={[-30, 10]}  easing={'easeOutQuad'}>
    <div className=" flex flex-row gap-11 p-6  flex-wrap	justify-center ">
      
  { ( load==true ? <h1>Loading</h1> : 
  
      events.map((d : any)=>(
        <Cards key={d.id} title={d.title} notifievent={d.notifievent} clubname={d.clubname} img={d.img} id={d.id} />
      ))
  
  )}

    </div>
    </Parallax>
    </div>
    </>
  )
}

async function getServerSideProps (){

  const prisma = new PrismaClient

  const events  = await prisma.events.findMany()

  //console.log(event)

  return{
    props: {
      events
    },
  };

}
export { getServerSideProps };

