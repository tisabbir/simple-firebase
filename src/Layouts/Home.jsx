import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <Link to={"/"} className="btn">
        Home
      </Link>
      <Link to={"/login"} className="btn">
        Login
      </Link>
    </div>
  );
};

export default Home;
