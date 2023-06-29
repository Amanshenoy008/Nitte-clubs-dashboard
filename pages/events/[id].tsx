import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Header from "@/components/header";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import {motion} from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const idd = ({ e ,d}: { e: any , d:any }) => {
  const [search, setsearch]: any = useState('');
  const [data, setdata]: any = useState(e);
 const router = useRouter();
 // const { id } = router.query;
  // console.log(id)
  //console.log(d)
  const handleclick = () => {
    console.log(search);
    if(search === ''){
      setdata(e)
    }else{
      const filtereddata = e.filter((d: any)=>{return d.title.toLowerCase().includes(search.toLowerCase())})
    setdata(filtereddata)
    setsearch('')
    if(filtereddata.length === 0){
      toast.dark('Search not found !!!',{
        position: toast.POSITION.TOP_RIGHT
      })
    }
    
    //d.title.toLowerCase() == search.toLowerCase()}));
    }
    console.log(data)
    
  };

  const hbc=()=>{
    router.back()
  }

  return (
    <>
      <div
      className={"h-screen w-screen bg-slate-900 p-4"}>
        {!e ? (
          <>
            <div className="p-5 ">
            <Skeleton variant="rectangular" width={1010} height={218} />
            </div>
            <div className="p-5">
                <Skeleton variant="rectangular" width={300} />
            </div>
            <div className="p-5 flex flex-col gap-5 ">
                <Skeleton variant="rounded" width={450} height={60}/>

                <Skeleton variant="rounded" width={650} height={120}/>

                <Skeleton variant="rounded" width={450} height={60}/>

            </div>
          </>
        ) : (
            <>
            <div>
              <button className="btn btn-primary" onClick={hbc}>{"<"}</button>
            </div>
            <div className="pt-8">
               {<Header  title={d.title} img={d.img} /> }
            </div>
            <div className="mt-8 flex flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Type Here..."
                    className="input input-bordered w-full max-w-xs"
                    onChange={(e) => setsearch(e.target.value)}
                    value={search}
                  />
                  <button className="btn btn-primary" onClick={handleclick}>
                    Search
                  </button>
            </div>
            <div className="flex flex-row mt-4 space-x-5  h-64  overflow-x-auto overflow-y-hidden snap-mandatory snap-x p-10 scrollbar-none border-x-2 rounded-xl border-white">
          <div className="flex flex-row-reverse gap-10">
          {data.map((d: any) => (
            <div className="bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg text-white rounded-lg flex flex-col gap-4 p-5 snap-center w-64 hover:scale-125 duration-75 easeout cursor-pointer " key={d.id}>
                
                  <h1 className="text-xl">{d.title}</h1>
                  <div className="flex flex-row justify-between">
                    <p className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                     <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>

                      {d.timendata}
                      </p>
                    <p className="flex flex-row gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                      {d.venue}
                      </p>
                  </div>
                  <p>
                    {d.eventdetail}
                  </p>
                
                
            </div>
            
          ))}
          </div>
          </div>
        
        </>
        )}
      </div>
          <ToastContainer />
    </>
  );
};

export default idd;

async function getServerSideProps({ query }: { query: any }) {
  let { id } = query;
  
  const prisma:any = new PrismaClient();
 // console.log(id)

  const d = await prisma.events.findFirst({
    where:{
        clubname:id
    }
  })
  //id = id.toLowerCase()
  //let e: any 

 /*switch (id) {
    case "1":
      e = await prisma.authorcraft.findMany({});
      break;
    case "3":
      e = await prisma.aura.findMany({});
      break;
    case "4":
      e = await prisma.csi.findMany({});
      break;
    case "2":
      e = await prisma.talleem.findMany({});
      break;
    default:
      e = [];
  }*/

  const model:any = prisma[id]
  const e = await model.findMany({})

  //console.log(e)
  return {
    props: {
      e,d
    },
  };
}

export { getServerSideProps };
