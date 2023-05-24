import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import Header from "@/components/header";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

const idd = ({ e ,d}: { e: any , d:any }) => {
  const [search, setsearch]: any = useState();
  const [data, setdata]: any = useState(e);
 // const router = useRouter();
 // const { id } = router.query;
  // console.log(id)
  // console.log(e)
  console.log(d)
  const handleclick = () => {
    console.log(search);
    setdata();
  };

  return (
    <>
      <div>
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
               {<Header  title={d.title} img={d.img} /> }
            </div>
            <div>
                  <input
                    type="text"
                    onChange={(e) => setsearch(e.target.value)}
                  />
                  <button className="btn" onClick={handleclick}>
                    Search
                  </button>
                </div>
          {e.map((d: any) => (
            <div >

                <div>
                    {/*here the all the events will be shown */}
                </div>
          
            </div>
            
          ))}

        
        </>
        )}
      </div>

    </>
  );
};

export default idd;

async function getServerSideProps({ query }: { query: any }) {
  let { id } = query;
  
  const prisma = new PrismaClient();
  //console.log(id)

  const d = await prisma.events.findFirst({
    where:{
        clubname:id
    }
  })
  id = id.toLowerCase()
  let e: any;
  switch (id) {
    case "authorcraft":
      e = await prisma.authorcraft.findMany({});
      break;
    case "aura":
      e = await prisma.aura.findMany({});
      break;
    case "csi":
      e = await prisma.csi.findMany({});
      break;
    case "tallem":
      e = await prisma.tallem.findMany({});
      break;
    default:
      e = [];
  }
  //console.log(e)
  return {
    props: {
      e,d
    },
  };
}

export { getServerSideProps };
