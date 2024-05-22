import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center gap-3">
            <p>Home</p>
            <div>
            <Link to={'/login'}><button className="btn bg-red-700 text-white">Login</button></Link>
            </div>

        </div>
    );
};

export default Home; 