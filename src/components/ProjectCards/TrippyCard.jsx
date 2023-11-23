import { Group, HoverCard, ScrollArea, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { SiExpo, SiTypescript } from "react-icons/si";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiClick } from "react-icons/gi";
import { useState } from "react";
import Footer from "../Footer.jsx";

export default function TrippyCard() {
  const [opened, { open, close }] = useDisclosure(false);
  const [showMore, setShowMore] = useState(false);

  return (
    <div style={{ height: "80vh" }}>
      <ScrollArea style={{ backgroundColor: "#0A1A2F" }}>
        <section>
          <h2 className={"text-center text-4xl font-bold text-blue-200  "}>
            Trippy - Mobile App
          </h2>
          <h3 className={"text-center my-4 text-blue-200"}>
            Mobile App to streamline the school trip planning process
          </h3>
          <ul className={"flex items-center justify-center gap-4"}>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://github.com/Proc31/trippy"
              >
                <FaGithub
                  color={"#6EE7B7"}
                  size={"2.5em"}
                  aria-label={"link to github repo"}
                />
                <FaExternalLinkAlt color={"#6EE7B7"} />
              </a>
            </li>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://drive.google.com/file/d/1lkQValjrpJz1FaR7r5l0nCFLCkQP7kbu/view?usp=sharing"
              >
                <FaYoutube color={"#6EE7B7"} size={"3em"} />
                <FaExternalLinkAlt
                  color={"#6EE7B7"}
                  aria-label={
                    "link to video where me and my team runs through the whole app"
                  }
                />
              </a>
            </li>
          </ul>
          <iframe
            className={"mx-auto"}
            width="80%"
            height="400"
            src={`https://www.youtube.com/embed/usUjBZ9Afok`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h1 className={"text-center font-bold text-blue-200"}>Stack</h1>
          <div
            className={
              "grid grid-cols-2 xl:w-5/6 gap-4   p-5 rounded-md my-1 mx-auto "
            }
          >
            <section>
              <h3 className="text-sm text-center text-emerald-300">
                React Native
              </h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
                      <TbBrandReactNative size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      React Native: Used to create a cross platform UI for both
                      IOS and android. This was my main role on the project.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center text-emerald-300">
                Firebase Realtime
              </h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
                      <IoLogoFirebase size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Firebase Realtime: This was used as the database holding
                      the data of our users. Firebase was also used to handle
                      the login auth.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center text-emerald-300">Expo GO</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
                      <SiExpo size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      Expo: This was used as our build platform to allow for the
                      testing of our project, and was very good for a simple
                      quick setup to get the code onto the android studio
                      emulator.
                    </Text>
                  </HoverCard.Dropdown>
                </HoverCard>
              </Group>
            </section>
            <section>
              <h3 className="text-sm text-center text-emerald-300">
                TypeScript
              </h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button color={"dark-blue"} className={"text-xl"}>
                      <SiTypescript size={"2em"} />
                    </Button>
                  </HoverCard.Target>
                  <HoverCard.Dropdown>
                    <Text size="sm">
                      TypeScript was a new addition to our skillset for this
                      project, so we opted for writing most of the project in
                      JavaScript and then refactoring into TS at the end. This
                      was more difficult than we thought, but an exciting
                      challenge nonetheless.
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
