import { useState } from "react";
import TrippyCard from "./ProjectCards/TrippyCard.jsx";
import { Button } from "@mantine/core";
import MiniNav from "./MiniNav.jsx";
import SkyeNewsFE from "./ProjectCards/SkyeNewsFE.jsx";
export default function ProjectsPage() {
  const [curProject, setProject] = useState("trippy");

  return (
    <div>
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
          <Button variant="default">Skye News BE</Button>
        </Button.Group>
      </nav>
      {curProject === "trippy" ? (
        <TrippyCard />
      ) : curProject === "skye" ? (
        <SkyeNewsFE />
      ) : (
        ""
      )}
    </div>
  );
}
