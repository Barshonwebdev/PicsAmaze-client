import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="flex justify-between items-center gap-3">
      <div>
        <Link to={"/login"}>
          <button className="btn bg-red-700 text-white">Login</button>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
