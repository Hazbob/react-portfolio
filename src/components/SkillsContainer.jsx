import { HoverCard, Button, Text, Group } from '@mantine/core';
import { FaReact, FaHtml5, FaCss3Alt,FaNode, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiPostgresql } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { LuTestTubes } from "react-icons/lu";
import { SiTailwindcss } from "react-icons/si";
import { WiTrain } from "react-icons/wi";







export default function SkillsContainer(){
    return <div className="grid grid-cols-4 w-1/2 gap-4  border-4 border-sky-500 p-5 rounded-md my-10 mx-auto ">
        <section>
            <h3 className="text-center">JavaScript</h3>

            <Group justify="center">
                <HoverCard width={280} shadow="md">

                    <HoverCard.Target>
                        <Button><IoLogoJavascript size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            JavaScript : Learned On Northcoders Bootcamp, and by completing a udemy course with 67.5 total lecture time.
                        </Text>

                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">React</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><FaReact size="2em" /></Button>
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
            <h3 className="text-center">HTML</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><FaHtml5 size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            HTML: Learned on both the Northcoders bootcamp, a udemy course on vanilla HTML and CSS.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">CSS</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><FaCss3Alt size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            CSS: Used in all of my projects for styling. Learned on both the Northcoders bootcamp, a udemy course on vanilla HTML and CSS.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Node</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><FaNode size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            Node: Used for the backend of my NC_News project Learned on both the Northcoders bootcamp, a udemy course on Node JS by the same person I learn JavaScript from.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Express JS</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><WiTrain size="2em" />
                        </Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            Express: Used for the backend on my NC_News project, this was a very welcome addition to node Js that made the developer experience much better.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">SQL</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><AiOutlineConsoleSql size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            SQL: Used in my NC_News Project for the database that holds the articles and learned on the Northcoders bootcamp.                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">PostgreSQL</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><DiPostgresql size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            PostgreSQL: Used in my NC_News Project for the database that holds the articles and learned on the Northcoders bootcamp.                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Firebase</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><IoLogoFirebase size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            Firebase: Used as the backend for the Trippy App, we used firebase realtime, however upon completion I believe we should have used something else.
                                                    </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Testing</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><LuTestTubes size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                        Testing: Jest and supertest were used throughout the building of NC_News for both unit testing and integration testing.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Tailwind CSS</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><SiTailwindcss size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            Tailwind CSS: Used on the portfolio you are seeing now, learning vanilla css before this allowed me to pickup Tailwind very easily.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
        <section>
            <h3 className="text-center">Github</h3>
            <Group justify="center">
                <HoverCard width={280} shadow="md">
                    <HoverCard.Target>
                        <Button><FaGithub size="2em" /></Button>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                        <Text size="sm">
                            Github: Used for everything, to maintain version control. Was vital to completing Trippy with a team of 6, so we could easily manage branches, and merging.
                        </Text>
                    </HoverCard.Dropdown>
                </HoverCard>
            </Group>
        </section>
    </div>
}