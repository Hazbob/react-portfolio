import { useState } from "react";
import TrippyCard from "./ProjectCards/TrippyCard.jsx";
import { Button } from "@mantine/core";

import SkyeNewsFE from "./ProjectCards/SkyeNewsFE.jsx";
import SkyeNewsBE from "./ProjectCards/SkyeNewsBE.jsx";

export default function ProjectsPage() {
  const [curProject, setProject] = useState("trippy");

  return (
    <div
      id={"projects"}
      style={{ backgroundColor: "#0A1A2F" }}
      className={"bg-blue-50 w-screen h-screen"}
    >
      <nav className={"flex w-screen px-5"}>
        <Button.Group color={"dark-blue"}>
          <Button
            onClick={() => setProject("trippy")}
            variant={curProject === "trippy" ? "primary" : "default"}
          >
            Trippy
          </Button>
          <Button
            color={"minecraft-green"}
            onClick={() => setProject("skye")}
            variant={curProject === "skye" ? "primary" : "default"}
          >
            Skye News FE
          </Button>
          <Button
            color={"minecraft-green"}
            onClick={() => setProject("skyebe")}
            variant={curProject === "skyebe" ? "primary" : "default"}
          >
            Skye News BE
          </Button>
        </Button.Group>
      </nav>
      {curProject === "trippy" ? (
        <TrippyCard />
      ) : curProject === "skye" ? (
        <SkyeNewsFE />
      ) : curProject === "skyebe" ? (
        <SkyeNewsBE />
      ) : null}

      {/*<footer className={"w-screen fixed bg-white bottom-0 h-20"}></footer>*/}
    </div>
  );
}
