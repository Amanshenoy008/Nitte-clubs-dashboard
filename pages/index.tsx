import Cards from "@/components/cards"
import Head from "next/head"
import {PrismaClient} from "@prisma/client"
import {useEffect, useState } from "react"
//import dynamic from "next/dynamic"
//import { useParallax } from "react-scroll-parallax/dist/hooks/useParallax"


//const Cards = dynamic(() => import("@/components/cards"));

export default  function Home ({events} : {events:any}) {

  const [load, setload]: any = useState(false)
 

  console.log(events)

  
  


  return (
    <>
    <Head>
        <title>Clubz-zone</title>
    </Head>
    <div className="bg-slate-900 h-screen w-screen">
    
    <div className=" flex flex-row gap-11 p-6  flex-wrap	justify-center ">
      
  { ( load==true ? <h1>Loading</h1> : 
  
      events.map((d : any)=>(
        <Cards key={d.id} title={d.title} notifievent={d.notifievent} clubname={d.clubname} img={d.img} id={d.id} />
      ))
  
  )}

    </div>

    <div className="tracking-wide" id="big-footer">
        {" "}N.M.A.M.I.T{" "}
    </div>
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

