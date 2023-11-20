import { RiContactsFill } from "react-icons/ri";
import { FaInfoCircle, FaCode } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import {Link} from 'react-router-dom'
export default function HomeNavBar(){
    return <nav className="w-4/6 mx-auto">
            <ul className="grid grid-cols-2 text-center text-4xl gap-5">
                <Link to={"/skills"}>

                <li className="flex flex-col items-center gap-4 bg-blue-300 w-20% px-10 py-5 rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2 text-2xl">
                    <GiBrain size={"2em"} />

                    Skills
                </li>
                </Link>
                <Link to={"/projects"}>
                <li className="flex flex-col items-center gap-4 bg-fuchsia-200 w-20% px-10 py-5 rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2 text-2xl">
                    <FaCode size={"2em"} />
                    Projects
                </li>
                </Link>
                <Link to={"/about"}>
                <li className="flex flex-col items-center gap-4 bg-emerald-200 w-20% px-10 py-5 rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2 text-2xl"><FaInfoCircle size="2em" />
                    About</li>
                </Link>
                <Link to={"Contact"}>
                <li className="flex flex-col items-center gap-4 bg-violet-300 w-20% px-10 py-5 rounded-md border-2 border-transparent hover:cursor-pointer hover:border-blue-700 hover:border-2 text-2xl">
                    <RiContactsFill size="2em" />
                    Contact
                </li>
                </Link>
            </ul>
        </nav>

}