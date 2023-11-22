import { Link } from "react-router-dom";

export default function MiniNav() {
  return (
    <nav className={"w-fit inline-block fixed top-0 right-0 z-10 "}>
      <ul
        style={{ backgroundColor: "#0A1A2F" }}
        className={"flex justify-centert  md:justify-end gap-4 "}
      >
        <li>
          <Link to={"/"}>
            <a
              className={"text-blue-100  hover:text-emerald-300 scroll-smooth"}
              href="#home"
            >
              <span className={"text-emerald-300 text-xs"}>01</span> Home
            </a>
          </Link>
        </li>

        <li>
          <a
            className={"text-blue-100 hover:text-emerald-300 scroll-smooth"}
            href="#skills"
          >
            <span className={"text-emerald-300 text-xs"}>02</span> Skills
          </a>
        </li>
        <li>
          <a
            className={"text-blue-100 hover:text-emerald-300"}
            href="#projects"
          >
            <span className={"text-emerald-300 text-xs"}>03</span> Projects
          </a>
        </li>

        <li>
          <Link
            className={"text-blue-100 hover:text-emerald-300"}
            to={"/contact"}
          >
            <span className={"text-emerald-300 text-xs "}>04</span> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
