import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { FaInfoCircle, FaCode } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";


export default function MiniNav(){
    return <nav className={"w-full my-1 p-1"}>
        <ul  className={"w-full grid grid-cols-5 gap-4"}>
            <Link to={"/"}>

            <li className={"bg-lime-200 flex-grow flex  flex-col items-center  rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2"}>
                <FaHome size={"3em"}/>
                Home
            </li>
            </Link>
            <Link to={"/skills"}>

            <li className={"bg-blue-300 flex-grow flex flex-col items-center rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2"}><GiBrain size={"3em"}/>Skills</li>
            </Link>
            <Link to={"/projects"}>

            <li className={"bg-fuchsia-200 flex-grow flex flex-col items-center rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2"}><FaCode size={"3em"}/>Projects</li>
            </Link>
            <Link to={"/about"}>

            <li className={"bg-emerald-200 flex-grow flex flex-col items-center rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2"}><FaInfoCircle size={"3em"}/>About</li>
            </Link>
            <Link to={"/contact"}>

            <li className={"bg-violet-300 flex-grow flex flex-col items-center rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2"}><RiContactsFill size={"3em"}/>Contact</li>
            </Link>


        </ul>
    </nav>
}