import { useState } from "react";
import { Button, Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import {
  FaCss3Alt,
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiAxios } from "react-icons/si";
import { GiClick } from "react-icons/gi";
import skyeBE from "../../assets/skyenewsbe.png";
import { SiJest } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { WiTrain } from "react-icons/wi";
import { DiPostgresql } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import Footer from "../Footer.jsx";

export default function SkyeNewsBE() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={"bg-blue-50"} style={{ height: "100%" }}>
      <ScrollArea className={"bg-blue-50"}>
        <section>
          <h2 className={"text-center text-4xl font-bold"}>
            Skye News BE - REST API
          </h2>
          <h3 className={"text-center my-4"}>
            Custom built REST api - bespoke for Skye News
          </h3>
          <ul className={"flex items-center justify-center gap-4"}>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://github.com/Hazbob/be-nc-news"
              >
                <FaGithub size={"2.5em"} /> <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://be-northcoder-news.onrender.com/api/articles"
              >
                <TbWorldWww size={"3em"} />
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
          <img
            loading={"lazy"}
            className={"w-10/12 mx-auto md:w-3/5"}
            src={skyeBE}
            alt="screenshot of Skye News Backend Code"
          />
          <h1 className={"text-center font-bold"}>Stack</h1>
          <div
            className={
              "grid grid-cols-2 md:grid-cols-4 xl:w-5/6 gap-4  md:border-4 border-sky-500 p-5 rounded-md my-1 mx-auto "
            }
          >
            <section>
              <h3 className="text-sm text-center">JavaScript</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <IoLogoJavascript size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">Used for the building of endpoints</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center">Node</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <FaNode size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Used to render the UI, all created manually apart from
                      some of the navigation buttons, that were sourced from
                      MaterialUI.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center">Express</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <WiTrain size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">Framework for node js.</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center">Jest</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <SiJest size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Used for writing of unit tests when testing small parts of
                      functionality.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>{" "}
            <section>
              <h3 className="text-sm text-center">Supertest</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-2xl"}>ST</Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Used for creating integration tests, to test greater
                      functionality, like expected return from database.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>{" "}
            <section>
              <h3 className="text-sm text-center">PostgreSQL</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <DiPostgresql size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Management system for the relational database.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>{" "}
            <section>
              <h3 className="text-sm text-center">SQL</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <AiOutlineConsoleSql size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Query language used for, creating the CRUD requests to our
                      database.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
          </div>
        </section>
      </ScrollArea>
    </div>
  );
}
