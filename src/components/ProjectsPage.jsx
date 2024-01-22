import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import SkyeNewsFE from "./ProjectCards/SkyeNewsFE.jsx";
import SkyeNewsBE from "./ProjectCards/SkyeNewsBE.jsx";
import JobApplicationApi from "./ProjectCards/JobApplicationApi.jsx";

export default function ProjectsPage() {
  const [curProject, setProject] = useState("trippy");

  return (
    <div
      id={"projects"}
      style={{ backgroundColor: "#0A1A2F", height: "80vh" }}
      className={"w-screen  px-5"}
    >
      <h1 className={"text-emerald-300 text-2xl my-10"}>Projects ___</h1>
      <h2 className={"text-emerald-300 text-xl my-10"}>
        Many more projects can be found on my{" "}
        <a
          className={"underline "}
          target={"_blank"}
          href="https://github.com/hazbob"
        >
          Github
        </a>
      </h2>
      <JobApplicationApi />
      <SkyeNewsFE />
      <SkyeNewsBE />
    </div>
  );
}
