import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, userLogout } = useAuth();
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div className="flex justify-end">
      <div className="lg:mr-5 flex flex-col items-center">
        <p>logged in as: {user.email} </p>

        <div>
        <button
          onClick={handleLogout}
          className="btn mt-2 ml-2 bg-red-700 text-white"
        >
          Logout
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
