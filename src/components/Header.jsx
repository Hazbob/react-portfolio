import SkillsContainer from "./SkillsContainer.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import { FaArrowUp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "./Footer.jsx";
import About from "./About.jsx";
import cv from "../assets/HarryRobinsonCVFS.pdf";
export default function Header() {
  return (
    <div>
      <header
        id={"home"}
        style={{ backgroundColor: "#0A1A2F" }}
        className="flex flex-col w-screen px-5 py-20 gap-4 md:gap-10 h-screen justify-center "
      >
        <h3 className="text-emerald-300">Hi, my name is</h3>
        <h1 className="text-4xl xl:text-5xl font-bold text-blue-200 md:text-7xl ">
          Harry Robinson.
        </h1>
        <h2
          style={{ color: "#8992B0", fontWeight: "bold" }}
          className="my-1 text-4xl md:text-7xl"
        >
          I'm a Junior Software Engineer.
        </h2>
        <p style={{ color: "#8992B0" }} className={"w-full md:w-2/3"}>
          Specialising in full stack development, allowing me to build stunning
          digital experiences from the ground up.
        </p>
        <a
          className={
            "text-emerald-300 h-fit border-2 border-emerald-300 text-center w-60 py-5 hover-2"
          }
          href={cv}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Checkout my resume!
        </a>
        <Footer />
      </header>
      <About />
      <SkillsContainer />
      <ProjectsPage />
      <a
        className={
          "flex-col justify-center items-center z-20 fixed md:w-40 md:h-20 bg-transparent border-2 border-emerald-300 text-xl bottom-5 text-white left-4 rounded-full text-center flex"
        }
        href="#home"
      >
        <FaArrowUp color={"#6EE7B7"} size={"1.5em"} />
        <h1 className={"text-emerald-300 hidden md:grid"}>Top</h1>
      </a>

      <Link
        to={"/contact"}
        className={
          "flex-col justify-center items-center z-20 fixed md:w-40 md:h-20 bg-transparent border-2 border-emerald-300 text-xl bottom-5 text-white right-9 md:right-4 rounded-full text-center flex "
        }
        href="#home"
      >
        <MdEmail color={"#6EE7B7"} size={"1.5em"} />
        <h1 className={"text-emerald-300 hidden md:grid"}>contact</h1>
      </Link>
    </div>
  );
}
