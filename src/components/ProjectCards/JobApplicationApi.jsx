import { useState } from "react";
import { Button, Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import jobAPI from "../../assets/jobAPI.png";
import { SiJest, SiPrisma, SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { WiTrain } from "react-icons/wi";
import { DiPostgresql } from "react-icons/di";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";

export default function JobApplicationApi() {
  return (
    <div>
      <section>
        <h2 className={"text-center text-4xl font-bold text-blue-200"}>
          Job Application Tracker - REST API
        </h2>
        <h3 className={"text-center my-4 text-blue-200"}>
          Custom built REST api with CRUD operations.
        </h3>
        <ul className={"flex items-center justify-center gap-4"}>
          <li>
            <a
              className={"flex"}
              target={"_blank"}
              href="https://github.com/Hazbob/Application-Tracker"
            >
              <FaGithub color={"#6EE7B7"} size={"2.5em"} />{" "}
              <FaExternalLinkAlt color={"#6EE7B7"} />
            </a>
          </li>
          <li>
            <a
              className={"flex"}
              target={"_blank"}
              href="https://jobapplicationtracker-ubqh.onrender.com"
            >
              <TbWorldWww color={"#6EE7B7"} size={"3em"} />
              <FaExternalLinkAlt color={"#6EE7B7"} />
            </a>
          </li>
        </ul>
        <img
          loading={"lazy"}
          className={"w-10/12 mx-auto md:w-1/5 "}
          src={jobAPI}
          alt="screenshot of the Job application api code"
        />
        <h1 className={"text-center font-bold  text-blue-200"}>Stack</h1>
        <div
          className={
            "grid grid-cols-2 md:grid-cols-4 xl:w-5/6 gap-4   p-5 rounded-md my-1 mx-auto "
          }
        >
          <section>
            <h3 className="text-sm text-center text-emerald-300">JavaScript</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <SiTypescript size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Programming language used, particularly with prisma. DX was
                    fantastic.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">Node</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <FaNode size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Node was used to be able to run JavaScript out of the
                    browser.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">Express</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <WiTrain size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Used to make some things easier than just with node, for
                    example routing.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">Jest</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
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
            <h3 className="text-sm text-center text-emerald-300">Supertest</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-2xl"}>
                    ST
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    Used for creating integration tests, to test greater
                    functionality, like expected return from database.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">PostgreSQL</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
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
            <h3 className="text-sm text-center text-emerald-300">SQL</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
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
          </section>{" "}
          <section>
            <h3 className="text-sm text-center text-emerald-300">PRISMA</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <SiPrisma size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    ORM used for interacting with my PSQL database. Used to
                    build the schema, and migrate the dbs.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">Hashing</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <MdOutlineSecurity size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    I used salted hashing for user security, so that passwords
                    are not stored on the database.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
          <section>
            <h3 className="text-sm text-center text-emerald-300">JWT</h3>

            <Group justify="center">
              <HoverCard width={280} shadow="md">
                <HoverCard.Target>
                  <Button color={"dark-blue"} className={"text-xl"}>
                    <MdOutlineSecurity size={"2em"} />
                  </Button>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <Text size="sm">
                    I used Json Web Tokens to protect routes, handle user login
                    and user registration.
                  </Text>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>
          </section>
        </div>
      </section>
    </div>
  );
}
