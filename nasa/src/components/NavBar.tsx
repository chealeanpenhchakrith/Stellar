import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">
        <button className="bg-amber-200">Home</button>
      </Link>
      <Link to="/apod">
        <button className="bg-amber-800">Apod</button>
      </Link>
    </>
  );
}
