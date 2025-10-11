import Image from "../components/Image";
import { Link } from "react-router-dom";

export default function Apod() {
  return (
    <>
      <div className="bg-[url('../src/assets/ImageBackground.png')] bg-cover bg-center h-30 relative bg-fixed">
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
      </div>
      <div className="bg-[#061120] h-100vh">
        <div className="flex justify-center">
          <h1 className="text-white mt-20 text-6xl">
            Astronomy Picture Of The Day
          </h1>
        </div>
        <Image />
      </div>
    </>
  );
}
