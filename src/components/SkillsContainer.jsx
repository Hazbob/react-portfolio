import { HoverCard, Button, Text, Group } from "@mantine/core";
import { FaReact, FaHtml5, FaCss3Alt, FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { LuTestTubes } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { WiTrain } from "react-icons/wi";
import { findAllByDisplayValue } from "@testing-library/react";
import MiniNav from "./MiniNav.jsx";

export default function SkillsContainer() {
  return (
    <div id={"skills"} className={"w-screen px-5 mt-10"}>
      <h1 className={"text-emerald-300 text-2xl"}>My Skills ___</h1>

      <p className="text-xl xl:text-2xl  text-blue-200 md:text-6xl ">
        Hover/tap for more info!
      </p>
      <div className="grid grid-cols-4 xl:w-5/6 gap-4     rounded-md my-10 mx-auto ">
        <section>
          <h3 className="text-center text-emerald-300">JavaScript</h3>

          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <IoLogoJavascript size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  JavaScript : Learned On Northcoders Bootcamp, and by
                  completing a udemy course with 67.5 total lecture time.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">React</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <FaReact size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  React : Used on my NC_News project, aka "Skye News".
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">HTML</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <FaHtml5 size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  HTML: Learned on both the Northcoders bootcamp, a udemy course
                  on vanilla HTML and CSS.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">CSS</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <FaCss3Alt size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  CSS: Used in all of my projects for styling. Learned on both
                  the Northcoders bootcamp, a udemy course on vanilla HTML and
                  CSS.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Node</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <FaNode size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Node: Used for the backend of my NC_News project Learned on
                  both the Northcoders bootcamp, a udemy course on Node JS by
                  the same person I learn JavaScript from.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Express</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <WiTrain size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Express: Used for the backend on my NC_News project, this was
                  a very welcome addition to node Js that made the developer
                  experience much better.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">SQL</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <AiOutlineConsoleSql size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  SQL: Used in my NC_News Project for the database that holds
                  the articles and learned on the Northcoders bootcamp.{" "}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Postgres</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <DiPostgresql size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  PostgreSQL: Used in my NC_News Project for the database that
                  holds the articles and learned on the Northcoders bootcamp.{" "}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Firebase</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <IoLogoFirebase size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Firebase: Used as the backend for the Trippy App, we used
                  firebase realtime, however upon completion I believe we should
                  have used something else.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Testing</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <LuTestTubes size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Testing: Jest and supertest were used throughout the building
                  of NC_News for both unit testing and integration testing.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Tailwind</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <SiTailwindcss size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Tailwind CSS: Used on the portfolio you are seeing now,
                  learning vanilla css before this allowed me to pickup Tailwind
                  very easily.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
        <section>
          <h3 className="text-center text-emerald-300">Github</h3>
          <Group justify="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button
                  color={"dark-blue"}
                  style={{ height: "5rem", width: "5rem" }}
                >
                  <FaGithub size="2em" />
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Text size="sm">
                  Github: Used for everything, to maintain version control. Was
                  vital to completing Trippy with a team of 6, so we could
                  easily manage branches, and merging.
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>
        </section>
      </div>
    </div>
  );
}
