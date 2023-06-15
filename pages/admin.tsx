import { useState } from "react";


const Admin = () => {

    const [title,settitle]: any = useState()
    const [time,settime]: any = useState()
    const [Venue,setvenue]: any = useState()
    const [detail,setdetail]: any = useState()

    const handlesubmit =  async (e: any)=>{
        e.preventDefault()

        const value = {
            title:title,
            timendate: time,
            Venue: Venue,
            detail:detail
        }

       //const res = await fetch('/api/hello').then(data=>data.json()).then((d)=>{ console.log(d)})
       const res = await fetch('/api/sendevent',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(value)
       }).then(d=>d.json()).then(data=>{
        console.log(data)
       }).catch(err=>{
        console.log(err)
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
                <div className=" flex flex-row gap-5 w-64 border-2 border-red-700">
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
                <button className="btn btn-primary w-36">Submit</button>
            </form>
        </div>
    </div>
    </> );
}
 
export default Admin;


