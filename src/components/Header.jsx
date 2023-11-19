import "animate.css";
import { MdPets } from "react-icons/md";
export default function Header() {
  return (
    <header className="flex flex-col mx-auto w-5/6 items-center ">
      <h2 className="text-5xl font-bold underline my-5">
        Hi, I'm Harry, and i'm a...
      </h2>
      <p className=" text-2xl flex justify-center items-center text-gray-400">
        // Dog Dad
        <span className="mx-3">
          {/*<MdPets />*/}
        </span>{" "}
        <br />
      </p>
      <h1 className=" text-7xl">
        Software Developer
      </h1>
        <p style={{marginTop: "6rem"}}>Click below See if i'm a good fit :)</p>
    </header>
  );
}
