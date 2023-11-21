import { useState } from "react";
import TrippyCard from "./ProjectCards/TrippyCard.jsx";
import { Button } from "@mantine/core";
import MiniNav from "./MiniNav.jsx";
import SkyeNewsFE from "./ProjectCards/SkyeNewsFE.jsx";
import SkyeNewsBE from "./ProjectCards/SkyeNewsBE.jsx";
export default function ProjectsPage() {
  const [curProject, setProject] = useState("trippy");

  return (
    <div className={"bg-blue-50"}>
      <MiniNav />
      <nav className={"flex w-screen"}>
        <Button.Group>
          <Button
            onClick={() => setProject("trippy")}
            variant={curProject === "trippy" ? "primary" : "default"}
          >
            Trippy
          </Button>
          <Button
            onClick={() => setProject("skye")}
            variant={curProject === "skye" ? "primary" : "default"}
          >
            Skye News FE
          </Button>
          <Button
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
    </div>
  );
}
