import { Button, Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";

import { TbWorldWww } from "react-icons/tb";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { GiClick } from "react-icons/gi";

import skye from "../../assets/skyenews.png";
import { useState } from "react";
export default function SkyeNewsFE() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ height: "80vh" }}>
      <ScrollArea className={"bg-blue-50"}>
        <section>
          <h2 className={"text-center text-4xl font-bold"}>
            Skye News FE - News Web App
          </h2>
          <h3 className={"text-center my-4"}>
            News Website Crafted In React and Hydrated with custom built API
          </h3>
          <ul className={"flex items-center justify-center gap-4"}>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://github.com/Hazbob/NC-News"
              >
                <FaGithub size={"2.5em"} /> <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://skyenews.netlify.app/"
              >
                <TbWorldWww size={"3em"} />
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
          <img
            loading={"lazy"}
            className={"w-10/12 mx-auto"}
            src={skye}
            alt="screenshot of Skye News Homepage"
          />
          <h1 className={"text-center font-bold"}>Stack</h1>
          <div
            className={
              "grid grid-cols-2 xl:w-5/6 gap-4  md:border-4 border-sky-500 p-5 rounded-md my-1 mx-auto "
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
                    <Text size="sm">
                      Used for the code to make requests, to hydrate the UI.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center">React</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <FaReact size={"2em"} />
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
              <h3 className="text-sm text-center">Axios</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <SiAxios size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">Used to create the API requests.</Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center">CSS</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
                      <FaCss3Alt size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      All styling done in vanilla CSS. With media queries to
                      help with responsiveness.
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
                    <span className={"font-bold"}>1.</span> Read Articles Loaded
                    From API.
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> Post comments on an
                    article.
                  </li>
                  <li>
                    <span className={"font-bold"}>3.</span> upvote or downvote
                    an article.
                  </li>
                </ol>
              </div>

              <div>
                <h2 className={"font-bold"}>Key Learnings:</h2>
                <ol className={"bg-lime-100 flex-col flex gap-4 "}>
                  <li>
                    <span className={"font-bold"}>1.</span> Dont Obsess over
                    styling, just get the functionality and perfect later
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> Make sure to plan
                    breaks when working solo as to not sit with a problem,
                    instead come back with fresh eyes.
                  </li>
                </ol>
              </div>
            </div>
          )}
        </section>
      </ScrollArea>
    </div>
  );
}
