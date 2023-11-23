import me from "../assets/harry.jpg";
import { useIntersection } from "@mantine/hooks";

export default function About() {
  return (
    <section className={"pt-10s"}>
      <h1 className={"px-5 text-emerald-300 text-2xl"}>About Me ___</h1>

      <main className={"flex flex-col md:grid md:grid-cols-2 px-5 "}>
        <p className="w-full text-blue-200 md:col-start-1 md: col-end-1 h-fit">
          I love traveling, food, video games, and last but not least, coding.
          I've always wanted to turn a hobby into my job, and most of my
          hobbies, as you can see, are hard to build a career out of. For years,
          I assumed I could get a job that I could tolerate but not love. So,
          I'm incredibly relieved that I stumbled into coding.
        </p>
        <p className={"text-blue-200 md:col-start-1 md:row-start-2 py-5"}>
          When i first started coding I engaged in extensive self-learning
          through Udemy courses. Initially, I delved into{" "}
          <span className={"text-emerald-300"}>Python</span> to craft scripts
          that significantly aided my business, generating approximately £600 in
          revenue by December 2022. Recognizing the need for formal education, I
          turned to <span className={"text-emerald-300"}>Northcoders</span> to
          solidify my skills. So I got on a cohort months down to give me time
          to sharpen my JS skills before I Join. I successfully completed their
          software development course and graduated in November 2023.
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
