import { useRouter } from "next/router";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {

    const [pass,setpass]: any = useState('')

    const router = useRouter()

    const handlelogin =(e:any)=>{
       e.preventDefault()
        console.log(pass )
        if(pass=== '0'){
            router.push('/admin')
        }else{
            console.log('log err')
            toast.dark("Invalid Password !", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
        
    }


    return ( <>
    <form onSubmit={(e)=>handlelogin(e)} className="flex flex-row justify-end bg-slate-800  rounded-lg p-5 gap-3">
        
        <input type="password" className="input input-bordered w-full max-w-xs" 
        onChange={(e)=>setpass(e.target.value)}
        placeholder="Password Here"
        value={pass}
        id="" />
        <button className="btn btn-primary" >Login</button>
        <ToastContainer />
    </form>
    
    </> );
}
 
export default Footer;

