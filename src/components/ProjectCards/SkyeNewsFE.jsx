import { Button, Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";

import { TbWorldWww } from "react-icons/tb";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { GiClick } from "react-icons/gi";

import skye from "../../assets/skyenews.png";
import { useState } from "react";
import Footer from "../Footer.jsx";
export default function SkyeNewsFE() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div style={{ height: "80vh" }}>
      <ScrollArea style={{ backgroundColor: "#0A1A2F" }}>
        <section>
          <h2 className={"text-center text-4xl font-bold text-blue-200"}>
            Skye News FE - News Web App
          </h2>
          <h3 className={"text-center my-4 text-blue-200"}>
            News Website Crafted In React and Hydrated with a custom built API
          </h3>
          <ul className={"flex items-center justify-center gap-4"}>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://github.com/Hazbob/NC-News"
              >
                <FaGithub
                  size={"2.5em"}
                  color={"#6EE7B7"}
                  aria-label={"hyper link to github repo"}
                />
                <FaExternalLinkAlt color={"#6EE7B7"} />
              </a>
            </li>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://skyenews.netlify.app/"
              >
                <TbWorldWww
                  color={"#6EE7B7"}
                  size={"3em"}
                  aria-label={"hyperlink to hosted news site"}
                />
                <FaExternalLinkAlt color={"#6EE7B7"} />
              </a>
            </li>
          </ul>

          <img
            loading={"lazy"}
            className={"w-10/12 mx-auto md:w-3/5 "}
            src={skye}
            alt="screenshot of Skye News Homepage"
          />

          <h1 className={"text-center font-bold"}>Stack</h1>
          <div
            className={
              "grid grid-cols-2 xl:w-5/6 gap-4  0 p-5 rounded-md my-1 mx-auto "
            }
          >
            <section>
              <h3 className="text-sm text-center text-emerald-300">
                JavaScript
              </h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
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
              <h3 className="text-sm text-center text-emerald-300">React</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
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
              <h3 className="text-sm text-center text-emerald-300">Axios</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
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
              <h3 className="text-sm text-center text-emerald-300 ">CSS</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
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
        </section>
      </ScrollArea>
      <div className={"h-20 sm:h-0"}></div>
    </div>
  );
}
