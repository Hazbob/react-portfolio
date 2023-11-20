
import Harry from "../assets/harry.jpg"
export default function Header() {
  return (
    <header className="flex flex-col mx-auto w-5/6 items-center ">
        <img className={"w-1/2 rounded-full drop-shadow  md:top-0 md right-0  md:w-1/12"} src={Harry} alt="image of me"/>
      <h2 className="text-2xl  xl:text-5xl font-bold underline xl:my-5">
        Hi, I'm Harry, and i'm a...
      </h2>
      <p className=" text-2xl flex justify-center items-center text-gray-400">
        // Dog Dad
      </p>
      <h1 className="text-2xl  xl:text-5xl font-bold underline xl:my-5x">
        Software Developer
      </h1>
        <p className="my-1">See below if i'm a good fit :)</p>
    </header>
  );
}
