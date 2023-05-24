
const Header = ({title,img}:{title:string,img:string}) => {

    const data ={
        greymatter:'https://nmamit.nitte.edu.in/img/non-technical-clubs/grey%20matter.jpg',
        rachana:'https://nmamit.nitte.edu.in/img/non-technical-clubs/rachana1.jpeg',
        authorcraft:'https://nmamit.nitte.edu.in/img/non-technical-clubs/autho1.png',
        yujforlife:'https://nmamit.nitte.edu.in/img/non-technical-clubs/yug.jpg',
        annadana:'https://nmamit.nitte.edu.in/img/non-technical-clubs/annadana1.jpg',
        aura:'https://nmamit.nitte.edu.in/img/non-technical-clubs/aura1.jpg',
        clickzclub:'https://nmamit.nitte.edu.in/img/non-technical-clubs/clicz.jpg',
        hackerearthclub:'https://nmamit.nitte.edu.in/img/non-technical-clubs/Hacker1.png',
        ecolution:'https://nmamit.nitte.edu.in/img/non-technical-clubs/ecol1.png',
        kalanjali:'https://nmamit.nitte.edu.in/img/non-technical-clubs/kalanjai.jpg',
        stereoclub:'https://nmamit.nitte.edu.in/img/non-technical-clubs/stereo.jpg',
        talleem:'https://nmamit.nitte.edu.in/img/non-technical-clubs/talim1.png',
        saca:'https://nmamit.nitte.edu.in/img/non-technical-clubs/saca.jpg',
        silverscreen:'https://nmamit.nitte.edu.in/img/non-technical-clubs/silver.jpg',
        isiriclub:'https://nmamit.nitte.edu.in/img/non-technical-clubs/isiri.jpg',

    }
    
    
    
    return (<>
    <div className="  w-3/5 h-60 border-2 border-white flex flex-row justify-between p-5 items-center rounded-r-lg bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg">
        <div className="underline text-2xl break-all tracking-wide font-semibold">
            {title}
        </div>
        <div>
            <img src="https://nmamit.nitte.edu.in/img/non-technical-clubs/rachana1.jpeg" alt="img here" className="rounded-md"/>
        </div>


    </div>
    </>  );
}
 
export default Header;