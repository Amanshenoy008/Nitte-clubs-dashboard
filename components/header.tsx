

const Header = ({title,img}:{title:string,img:string}) => {

    
    
    
    return (<>
    <div className="  w-3/5 h-60 border-2 border-white flex flex-row justify-between p-5 items-center rounded-r-lg bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg">
        <div className="underline text-white text-2xl break-all tracking-wide font-semibold">
           {"New Event: "} {title}{"*"}
        </div>
        <div>
            <img src={img} alt="img here" className="rounded-md w-32" />
        </div>


    </div>
    </>  );
}
 
export default Header;