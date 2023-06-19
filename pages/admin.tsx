import { useState, useEffect } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {links} from '@/data/links'

const Admin = () => {

    const [title,settitle]: any = useState()
    const [time,settime]: any = useState()
    const [Venue,setvenue]: any = useState()
    const [detail,setdetail]: any = useState()
    const [clubname,setclubname]: any = useState()
    const [img,setimg]: any =useState()

    useEffect(()=>{
        switch(clubname){
            case 'saca': setimg(links.saca)
                        break
            case 'talleem': setimg(links.talleem)
                         break
            case 'csi': break
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
            case 'yujforlife' : setimg(links.yujforlife)
                        break
            case 'annadana' : setimg(links.annadana)
                        break
            case 'clickzclub' : setimg(links.clickzclub)
                        break
            case 'hackerearthclub' : setimg(links.hackerearthclub)
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

    return ( <>
    <div className="h-screen w-screen bg-slate-900">
        <div>
            {/*Code to display list of events */}
        </div>
        <div>
            {/* form which will add new data to event model */}
            <h1>{" "}Add Details of new Event{" "}</h1>
            <form onSubmit={(e)=>{handlesubmit(e)}} className="flex flex-col gap-5 p-3">
                <div className=" flex flex-row gap-5 w-64 ">
                <label>Title</label>
                <input type="text"  id=""
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e)=>{settitle(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-5 w-64">
                    <label htmlFor="">Time/date</label>
                    <input type="text" name="" id="" 
                    className="input input-bordered input-primary w-full max-w-xs"
                    onChange={(e)=>{settime(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-5 w-64">
                    <label htmlFor="">Venue</label>
                    <input type="text" name="" id="" 
                    className="input input-bordered input-primary w-full max-w-xs"
                    onChange={(e)=>{setvenue(e.target.value)}} required/>
                </div>
                <div className="flex flex-row gap-5 w-64">
                    <label htmlFor="">Event Detail:</label>
                    <textarea name="" id="" 
                    className="input input-bordered input-primary w-full max-w-xs"
                    cols={30} rows={10}  onChange={(e)=>{setdetail(e.target.value)}} required ></textarea>
                </div>
                <div>
                    <label className="">Choose Your club</label>
                    <select name="" id="" onChange={(e)=>{ setclubname(e.target.value)}}>
                        {Object.keys(links).map((d)=>(
                            <option value={d} key={d}>{d}</option>
                        ))}
                    </select>
                </div>
                <button className="btn btn-primary w-36">Submit</button>
            </form>
        </div>
        <ToastContainer />
    </div>
    </> );
}
 
export default Admin;


