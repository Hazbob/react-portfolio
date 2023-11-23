import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={"flex w-full gap-4   "}>
      <a
        href="https://github.com/Hazbob"
        aria-label={"Link to my GitHub profile"}
      >
        <FaGithub className={"mx-auto"} size={"2.5em"} color={"#6EE7B7"} />
      </a>
      <a
        href="https://www.linkedin.com/in/harry-robinson-8484bb187/"
        aria-label={"Link to my LinkedIn profile"}
      >
        <FaLinkedin className={"mx-auto"} size={"2.5em"} color={"#6EE7B7"} />
      </a>
    </footer>
  );
}
