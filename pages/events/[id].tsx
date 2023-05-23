import { useRouter } from "next/router";
import {PrismaClient} from "@prisma/client"

const id = ({e}:{e:any}) => {


    const router = useRouter()
    const { id } = router.query
    console.log(e)

    return (<>
    Hi
    </>  );
}
 
export default id;


 async function getServerSideProps (){

    const prisma = new PrismaClient()
    const e = await prisma.authorcraft.findMany({})
    //console.log(e)
    return {
        props:{
            e,
        }
    }
 }

 export {getServerSideProps}