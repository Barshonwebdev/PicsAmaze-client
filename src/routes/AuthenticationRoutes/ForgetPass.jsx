import { Link } from "react-router-dom";

const ForgetPass = () => {
  const handleForgetPass = () => {};
  return (
    <div className="">
      <div className="mt-10 flex justify-center ">
        <div className="card shadow-xl bg-base-100 p-5">
        <h3 className="font-bold text-lg mb-3">Provide your email</h3>
        <label className="py-4">
          Enter your email here and we will send you a password reset link!
        </label>
        <form onSubmit={handleForgetPass} className="my-4">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            id=""
            className="border-2 border-gray-400 rounded-md focus:outline-none pl-2"
          />
        </form>
        <div className="flex justify-between" >
          <Link to='/login'>
          <button className="btn btn-primary">
            Back to login
          </button>
          </Link>
          <button className="btn hover:text-white hover:bg-red-800 bg-red-600 text-white">
            Send me link!
          </button>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
