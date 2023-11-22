import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={"grid w-full grid-cols-2 bg-gray-600  bottom-0 left-0"}>
      <a href="">
        <FaGithub className={"mx-auto"} size={"3em"} color={"white"} />
      </a>
      <a href="">
        <FaLinkedin className={"mx-auto"} size={"3em"} color={"white"} />
      </a>
    </footer>
  );
}
