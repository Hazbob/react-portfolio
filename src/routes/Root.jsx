import { Outlet } from "react-router-dom";
import "@mantine/carousel/styles.css";
import MiniNav from "../components/MiniNav.jsx";

export default function Root() {
  return (
    <>
      <div className=" flex items-center justify-center h-full">
        <div className="w-11/12 h-full bg-blue-50 mx-auto rounded-md ">
          <MiniNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}
