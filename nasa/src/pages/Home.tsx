import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="bg-[url('../src/assets/ImageBackground.png')] bg-cover bg-center h-screen relative">
        <div className="flex gap-10 absolute right-10 top-10">
          <Link to="/">
            <span className="text-2xl text-white font-light hover:underline">
              HOME
            </span>
          </Link>
          <Link to="/apod">
            <span className="text-2xl text-white font-light hover:underline">
              APOD
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-start absolute mt-110 ml-20 gap-2">
          <h1 className="text-white text-6xl">Your Gateway to The Cosmos</h1>
          <h1 className="text-[#7083A3] text-6xl">Begins Here</h1>
          <Link to="/apod">
            <button className="rounded-xl px-6 py-3 mt-2 bg-[#011e38] text-white hover:bg-[#7083A3] hover:text-white duration-300">
              <h3 className="text-xl">Explore Now</h3>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
