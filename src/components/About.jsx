import me from "../assets/harry.jpg";
import { useIntersection } from "@mantine/hooks";

export default function About() {
  return (
    <section className={"pt-10s"}>
      <h1 className={"px-5 text-emerald-300 text-2xl"}>About Me ___</h1>

      <main className={"flex flex-col md:grid md:grid-cols-2 px-5 "}>
        <p className="w-full text-blue-200 md:col-start-1 md: col-end-1 h-fit">
          I love travelling, food, video games, and last but not least, coding.
          I've always wanted to turn a hobby into my job, and as you can see,
          most of my hobbies are hard to build a career out of. For years, I
          assumed I could get a job that I could tolerate but not love. So, I'm
          incredibly relieved that I stumbled into coding.
        </p>
        <p className={"text-blue-200 md:col-start-1 md:row-start-2 py-5"}>
          I got my first break into software development when I needed to
          monitor online stock levels of certain shoes for my reselling
          business. I knew that code would be the answer to my problems, so I
          picked up Python to create a script that would notify me of stock
          changes instantly, so I could purchase them before they went out of
          stock. This proved to be successful and I’ve been hooked ever since.
          Recognising the need for formal education, I turned to{" "}
          <span className={"text-emerald-300"}>Northcoders</span> to solidify my
          skills. So I got onto a cohort months down the line to give me time to
          sharpen my <span className={"text-emerald-300"}>JavaScript</span>{" "}
          skills before joining. I successfully completed their software
          development course and graduated in November 2023.
        </p>

        <img
          src={me}
          alt="less professional image of myself"
          className={
            "hue-rotate-60 w-1/2 hover:hue-rotate-0 mx-auto md:col-start-2 md:row-span-2"
          }
        />
      </main>
    </section>
  );
}
