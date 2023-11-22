import SkillsContainer from "./SkillsContainer.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import { FaArrowUp } from "react-icons/fa";

export default function Header() {
  return (
    <div>
      <header
        id={"home"}
        style={{ backgroundColor: "#0A1A2F" }}
        className="flex flex-col w-screen px-5 py-20 gap-4 md:gap-10 "
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
          I’m a software engineer specializing in full stack development,
          allowing for me to build stunning digital experiences from the ground
          up.
        </p>
        <a
          className={
            "text-emerald-300 h-full border-2 border-emerald-300 text-center w-60 py-5"
          }
          href={"https://rose-deanne-43.tiiny.site/"}
          target={"_blank"}
        >
          Checkout my resume!
        </a>
      </header>
      <SkillsContainer />
      <ProjectsPage />
      <a
        className={
          "flex-col justify-center items-center z-20 fixed md:w-20 md:h-20 bg-transparent border-2 border-emerald-300 text-xl bottom-4 text-white left-4 rounded-full text-center flex"
        }
        href="#home"
      >
        <FaArrowUp color={"#6EE7B7"} size={"1.5em"} />
        <h1 className={"text-emerald-300 hidden md:grid"}>Top</h1>
      </a>
    </div>
  );
}
