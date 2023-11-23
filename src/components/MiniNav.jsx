import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MiniNav() {
  let location = useLocation();

  if (location.pathname === "/contact") return;
  return (
    <nav className={"w-fit inline-block fixed top-0 right-0 z-50 "}>
      <ul
        style={{ backgroundColor: "#0A1A2F" }}
        className={"flex justify-centert  md:justify-end gap-4 "}
      >
        <li>
          <a
            className={"text-blue-100  hover:text-emerald-300 scroll-smooth"}
            href="#home"
            aria-label={"nav button to the top home part of my website"}
          >
            <span className={"text-emerald-300 text-xs"}>01</span> Home
          </a>
        </li>

        <li>
          <a
            className={"text-blue-100 hover:text-emerald-300 scroll-smooth"}
            href="#skills"
            aria-label={"nav button to the skills part of my website"}
          >
            <span className={"text-emerald-300 text-xs"}>02</span> Skills
          </a>
        </li>
        <li>
          <a
            className={"text-blue-100 hover:text-emerald-300"}
            href="#projects"
            aria-label={"nav button to the projects part of my website"}
          >
            <span className={"text-emerald-300 text-xs"}>03</span> Projects
          </a>
        </li>

        <li>
          <Link
            className={"text-blue-100 hover:text-emerald-300"}
            to={"/contact"}
            aria-label={"link to load page where the contact form exists "}
          >
            <span className={"text-emerald-300 text-xs "}>04</span> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
