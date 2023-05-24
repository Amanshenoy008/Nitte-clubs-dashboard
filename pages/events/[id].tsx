import { useRouter } from "next/router";
import {PrismaClient} from "@prisma/client"
import Header from "@/components/header";


const idd = ({e}:{e:any}) => {

    const router = useRouter()
    const { id } = router.query
    console.log(id)
    console.log(e)

    return (<>
    <div>
        <div>
            <Header />
        </div>
    </div>
    </>  );
}
 
export default idd;


 async function getServerSideProps ({query} : {query:any}){
    
    let {id} = query
     //id = id.toLowerCase()
    const prisma = new PrismaClient()
    let e:any
    switch(id){
        case "authorcraft": 
        e = await prisma.authorcraft.findMany({})
        break
        case "aura":
         e = await prisma.aura.findMany({})
        break
        case "csi":
         e = await prisma.csi.findMany({})
        break
        case "tallem":
         e = await prisma.tallem.findMany({})
        break
        default:
        e=[]

    }
    //console.log(e)
    return {
        props:{
            e,
        }
    }
 }

 export {getServerSideProps}

