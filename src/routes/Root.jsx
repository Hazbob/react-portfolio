import { Outlet } from "react-router-dom";
import "@mantine/carousel/styles.css";
import MiniNav from "../components/MiniNav.jsx";
import Footer from "../components/Footer.jsx";

export default function Root() {
  return (
    <>
      <div
        style={{ backgroundColor: "#0A1A2F" }}
        className=" flex items-center justify-center h-full"
      >
        <div style={{ backgroundColor: "#0A1A2F" }} className="w-screen ">
          <MiniNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}
