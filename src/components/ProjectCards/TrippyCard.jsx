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
      <ScrollArea className={"bg-blue-50"}>
        <section>
          <h2 className={"text-center text-4xl font-bold"}>
            Trippy - Mobile App
          </h2>
          <h3 className={"text-center my-4"}>
            Mobile App to streamline the school trip planning process
          </h3>
          <ul className={"flex items-center justify-center gap-4"}>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://github.com/Proc31/trippy"
              >
                <FaGithub size={"2.5em"} /> <FaExternalLinkAlt />
              </a>
            </li>
            <li>
              <a
                className={"flex"}
                target={"_blank"}
                href="https://drive.google.com/file/d/1lkQValjrpJz1FaR7r5l0nCFLCkQP7kbu/view?usp=sharing"
              >
                <FaYoutube size={"3em"} />
                <FaExternalLinkAlt />
              </a>
            </li>
          </ul>
          <iframe
            className={"mx-auto"}
            width="80%"
            height="400"
            src={`https://www.youtube.com/embed/usUjBZ9Afok`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          <h1 className={"text-center font-bold"}>Stack</h1>
          <div
            className={
              "grid grid-cols-2 xl:w-5/6 gap-4  md:border-4 border-sky-500 p-5 rounded-md my-1 mx-auto "
            }
          >
            <section>
              <h3 className="text-sm text-center">React Native</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
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
              <h3 className="text-sm text-center">Firebase Realtime</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
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
              <h3 className="text-sm text-center">Expo GO</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
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
              <h3 className="text-sm text-center">TypeScript</h3>

              <Group justify="center">
                <HoverCard width={280} shadow="md">
                  <HoverCard.Target>
                    <Button className={"text-xl"}>
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
                    <span className={"font-bold"}>1.</span> Teacher can create a
                    trip, invite students to that trip and plan the trip while
                    keeping students and parents updated.
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> Teacher can edit
                    trip details.
                  </li>
                  <li>
                    <span className={"font-bold"}>3.</span> Teacher can scan QR
                    code generated on students phones to register them, while
                    seeing a list of the missing students.
                  </li>
                  <li>
                    <span className={"font-bold"}>4.</span> Teacher can place
                    meeting points on a map, that is then rendered in the
                    students accounts so they can see where to meetup.
                  </li>
                  <li>
                    <span className={"font-bold"}>5.</span> Student can see an
                    inventory list for the trip and the info of the trip to plan
                    ahead
                  </li>
                  <li>
                    <span className={"font-bold"}>6.</span> Parents can see the
                    price of the trip, location, and inventory of ONLY the trips
                    their child is invited on
                  </li>
                </ol>
              </div>
              <div>
                <h2 className={"font-bold"}>Key Learnings:</h2>
                <ol className={"bg-lime-100 flex-col flex gap-4 "}>
                  <li>
                    <span className={"font-bold"}>1.</span> Spend more time
                    deciding on SQL or No SQL.
                  </li>
                  <li>
                    <span className={"font-bold"}>2.</span> If communication is
                    lacking, organise more huddles.
                  </li>
                  <li>
                    <span className={"font-bold"}>3.</span> Reader mode on
                    browsers makes docs a lot more digestible and memorable.
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
