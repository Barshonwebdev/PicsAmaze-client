import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, userLogout } = useAuth();
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="flex justify-end">
      <div className="lg:mr-5 flex flex-col items-center">
        {
            user.email&&<p>logged in as: {user.email} </p>
        }

        <div>
        {
            user.email? <button
            onClick={handleLogout}
            className="btn mt-2 ml-2 bg-red-700 text-white"
          >
            Logout
          </button> :
         <Link to='/login'>
         <button
          
            className="btn mt-2 ml-2 bg-red-700 text-white"
          >
            Login
          </button></Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Header;
