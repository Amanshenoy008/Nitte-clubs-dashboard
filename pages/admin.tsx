import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {links} from '@/data/links'
import { useRouter } from "next/router";

const Admin = () => {

    const [title,settitle]: any = useState()
    const [time,settime]: any = useState()
    const [Venue,setvenue]: any = useState()
    const [detail,setdetail]: any = useState()
    const [clubname,setclubname]: any = useState()
    const [img,setimg]: any =useState()
    const router = useRouter()

    useEffect(()=>{
        switch(clubname){
            case 'saca': setimg(links.saca)
                        break
            case 'talleem': setimg(links.talleem)
                         break
            case 'rachana': setimg(links.rachana)
                        break
            case 'aura' : setimg(links.aura)
                        break
            case 'greymatter' : setimg(links.greymatter)
                         break
            case 'ecolution' : setimg(links.ecolution)
                        break
            case 'stereoclub' : setimg(links.stereoclub)
                        break
            case 'authorcraft' : setimg(links.authorcraft)
                        break
            case 'clickzclub' : setimg(links.clickzclub)
                        break
            case 'hackerearthclub' : setimg(links.hackerearthclub)
            break
            case 'kalanjali': setimg(links.kalanjali)
                        break
            default : setimg('')
        }
        console.log(img)
    },[clubname])
    

    const handlesubmit =  async (e: any)=>{
        e.preventDefault()
        const value: object = {
            title:title,
            timendate: time,
            Venue: Venue,
            detail:detail,
            clubname:clubname,
            img:img,
        }
        console.log(value)
        

       //const res = await fetch('/api/hello').then(data=>data.json()).then((d)=>{ console.log(d)})
       const res = await fetch('/api/sendevent',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(value)
       }).then(d=>d.json()).then(data=>{
        console.log(data)
        toast.dark("Event Added !", {
            position: toast.POSITION.TOP_RIGHT
          });
        
       }).catch(err=>{
        console.log(err)
        toast.dark("Invalid entry !", {
            position: toast.POSITION.TOP_RIGHT
          });
       })
    }

    const goback =()=>{
        router.back()
    }

    return ( <>
    <div className="h-screen w-screen bg-slate-900 overflow-hidden">
        {/*<div>
            {/*Code to display list of events }
        </div>*/}
        <div className="relative top-5 -right-5">
            <button className="btn btn-primary" onClick={goback}>{"<"}</button>
        </div>
        <div className="flex flex-col gap-5 h-screen justify-center items-center pb-10 ">
            {/* form which will add new data to event model */}
            <h1 className="text-2xl text-white">{" "}Add Details of new Event{" "}</h1>
            <form onSubmit={(e)=>{handlesubmit(e)}} className="flex flex-col gap-5 p-3">
                <div className=" flex flex-row gap-16 w-96 ">
                <label>Title</label>
                <input type="text"  id=""
                className="form-class" maxLength={20}
                onChange={(e)=>{settitle(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-10 w-96">
                    <label htmlFor="">Time/date</label>
                    <input type="text" name="" id="" 
                    className="form-class"
                    onChange={(e)=>{settime(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-16 w-96">
                    <label htmlFor="">Venue</label>
                    <input type="text" name="" id="" 
                    className="form-class"
                    onChange={(e)=>{setvenue(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-12 w-96">
                    <label htmlFor="">Event Detail:</label>
                    <textarea name="" id="" 
                    className="form-class"
                    cols={30} rows={10}  onChange={(e)=>{setdetail(e.target.value)}} required ></textarea>
                </div>
                <div className="flex flex-row gap-10 w-96">
                    <label className="">Club-name:</label>
                    <select name="" id=""
                    className="select select-primary w-full max-w-xs"
                    onChange={(e)=>{ setclubname(e.target.value)}}>
                        <option disabled selected>Pick your Club: </option>
                        {Object.keys(links).map((d)=>(
                            <option value={d} key={d}>{d}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary w-full">Submit</button>
            </form>
        </div>
        <ToastContainer />
    </div>
    </> );
}
 
export default Admin;


