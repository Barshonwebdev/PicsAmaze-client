import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const { user, userLogout } = useAuth();
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="flex justify-between mt-3 lg:px-4">
      <Link to="/">
        <div className="p-2 flex items-center space-x-2">
          <img
            className="w-10"
            src="/src/assets/Pinterest_idTCNAlH1L_4.png"
            alt=""
          />
          <p className="font text-red-700 text-3xl">PicsAmaze</p>
        </div>
      </Link>
      <div className="lg:mr-5 flex flex-col items-center">
        {user.email && <p>logged in as: {user.email} </p>}

        <div>
          {user.email ? (
            <button
              onClick={handleLogout}
              className="btn mt-2 ml-2 bg-red-700 text-white"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn mt-2 ml-2 bg-red-700 text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
