


const Admin = () => {

    return ( <>
    <div className="h-screen w-screen bg-slate-900">
        <div>
            {/*Code to display list of events */}
        </div>
        <div>
            {/* form which will add new data to event model */}
            <h1>{" "}Add Details of new Event{" "}</h1>
            <form >
                <div>
                <label>Title</label>
                <input type="text"  id="" />
                </div>
                <div>
                    <label htmlFor="">Time/date</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Venue</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label htmlFor="">Event Detail:</label>
                    <textarea name="" id="" cols={30} rows={10}></textarea>
                </div>
            </form>
        </div>
    </div>
    </> );
}
 
export default Admin;