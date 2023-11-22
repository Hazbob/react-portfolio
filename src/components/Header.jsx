import Harry from "../assets/harry.jpg";
export default function Header() {
  return (
    <header className="flex flex-col mx-auto w-5/6 items-center py-20 py-5 gap-4 ">
      <img
        className={
          "w-1/3 md:w-1/2 rounded-full drop-shadow  md:top-0 md:right-0  md:w-2/12"
        }
        src={Harry}
        alt="image of me"
      />
      <h2 className="text-2xl  xl:text-5xl font-bold  xl:my-5">
        Hi, I'm Harry, and i'm a...
      </h2>
      <h1 className="text-3xl text-center  xl:text-5xl font-bold  text-violet-700">
        Software Developer
      </h1>
      <p className="my-1 text-2xl text-center">Based in Manchester.</p>
    </header>
  );
}
