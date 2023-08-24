import Admin from "../components/Admin";
import User from "../components/User";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-900">
      <h1 className="font-bold text-5xl bg-gradient-to-r from-sky-500 to-sky-300 text-transparent bg-clip-text p-5 mb-6 text-center  md:text-7xl">
        Who is Using this ?
      </h1>
      <div className="flex flex-col justify-center items-center gap-10 xl:flex-row md:flex-row">
        <Link to="/admin">
          <Admin />
        </Link>
        <Link to="/user">
          <User />
        </Link>
      </div>
    </div>
  );
}

export default Home;
