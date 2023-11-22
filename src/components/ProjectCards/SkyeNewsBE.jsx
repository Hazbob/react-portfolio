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
          <Button
            className={"rounded-none flex"}
            onClick={() => setShowMore(!showMore)}
            fullWidth
          >
            Toggle More Info!
            <GiClick />
          </Button>
          {showMore && (
            <div className={"w-100% md:flex bg-lime-100 "}>
              <div className={"w-full md:w-1/2"}>
                <h2 className={"font-bold"}>Features:</h2>
                <ol className={"bg-lime-100 flex-col flex gap-4 "}>
                  <li>
                    <span className={"font-bold"}>1.</span> Get Requests for
                    articles, comments and likes.
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> Post Request for
                    comments.
                  </li>
                  <li>
                    <span className={"font-bold"}>3.</span> Update/Patch
                    requests for likes.
                  </li>{" "}
                  <li>
                    <span className={"font-bold"}>4.</span>Delete requests for
                    comments.
                  </li>{" "}
                  <li>
                    <span className={"font-bold"}>5.</span>Tested thoroughly
                    with Jest and Supertest.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className={"font-bold"}>Key Learnings:</h2>
                <ol className={"bg-lime-100 flex-col flex gap-4 "}>
                  <li>
                    <span className={"font-bold"}>1.</span> Testing really makes
                    your life easier when you are 100% confident in the,
                    input/output.
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> Putting more time
                    intp setup from the beginning enables greater developer
                    experience down the line. For example using routers, from
                    the start instead of adding later on.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </section>
      </ScrollArea>
      <div className={"h-20 sm:h-0"}></div>
    </div>
  );
}
