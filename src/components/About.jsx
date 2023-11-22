import me from "../assets/IMG_9942.jpeg";

export default function About() {
  return (
    <main className={"flex flex-col gap-20 md:flex-row "}>
      <article>
        <p>
          It's safe to say I've taken quite the scenic route to arrive at being
          a software developer. From Farming, to woodworking, and even a detour
          into business admin and customer service – I've been a bit of a
          professional wanderer. But, somehow, I stumbled into the world of
          coding, where I am still building things, just with much more
          satisfaction and (slightly) less backache.
        </p>
        <p>
          I love traveling, food, video games, and last but not least, coding.
          I've always wanted to turn a hobby into my job, and most of my
          hobbies, as you can see, are hard to build a career out of. For years,
          I assumed I could get a job that I could tolerate but not love. So,
          I'm incredibly relieved that I stumbled into coding.
        </p>
      </article>
      <article>
        <img
          className={"w-3/3 mx-auto md:w-5/6"}
          src={me}
          alt="less professional image of myself"
        />
      </article>
    </main>
  );
}
