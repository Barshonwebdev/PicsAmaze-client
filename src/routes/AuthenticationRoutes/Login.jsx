import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { CiFacebook } from "react-icons/ci";

const Login = () => {
  const { googleLogin, user, userLogout, facebookLogin, signIn } = useAuth();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    signIn(email, pass).then(() => {
      e.target.reset();
    });
  };
  const handleGoogleLogin = () => {
    googleLogin();
  };
  const handleFacebookLogin = () => {
    facebookLogin();
  };
  const handleForgetPass=()=>{
    
  }
  const handleLogout = () => {
    userLogout();
  };
  return (
    <div>
      <div className="invisible">
        <p>logged in user: {user.email} </p>
        <Link to={"/"}>
          <button className="btn ml-2 bg-red-700 text-white">Home</button>
        </Link>
        <button
          onClick={handleLogout}
          className="btn ml-2 bg-red-700 text-white"
        >
          Logout
        </button>
      </div>

      <div>
        <div className="hero ">
          <div className="hero-content flex-col lg:space-x-12 lg:flex-row-reverse">
            <div className="text-center lg:text-left px-5 lg:ml-10">
              <h1 className="text-5xl font-bold">Login at PicsAmaze!</h1>
              <p className="py-6 lg:mr-52 ">
                Get your photos ready! picsAmaze lets you embark on a journey
                full of ideas expressed with photography and images!!
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#forgot" className="text-xs font-bold">Forgot password?</a>
                  </label>
                  <div>
                    {/* modal  */}
                    <div className="modal" role="dialog" id="forgot">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3">Provide your email</h3>
                        <label className="py-4">
                          Enter your email here and we will send you a password reset link!
                        </label>
                        <form onSubmit={handleForgetPass} className="my-4">
                          <label>Email: </label>
                          <input type="email" name="email" id="" className="border-2 border-gray-400 rounded-md focus:outline-none pl-2" />
                        </form>
                        <div className="modal-action">
                          <button className="btn hover:text-white hover:bg-red-800 bg-red-600 text-white">
                            Send me link!
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-control mt-6 gap-2">
                  <button className="btn hover:bg-red-800 text-white bg-red-600">
                    Login
                  </button>
                  <p className="text-center">Or,</p>
                  <button
                    onClick={handleGoogleLogin}
                    className="btn bg-white text-black hover:bg-base-300"
                  >
                    <FcGoogle className="text-xl"></FcGoogle> Continue with
                    Google
                  </button>
                  <button
                    onClick={handleFacebookLogin}
                    className="btn bg-blue-500 text-white hover:bg-blue-700"
                  >
                    <CiFacebook className="text-xl"></CiFacebook> Continue with
                    Facebook
                  </button>
                  <small className="text-center">
                    By continuing, you agree to PicsAmaze&apos;s Terms of
                    Service; and acknowledge you&apos;ve read our Privacy
                    Policy.
                  </small>
                  <hr className="w-36 mx-auto" />
                  <Link to="/register" className="mx-auto">
                    <p className=" text-sm font-semibold">
                      Not yet on PicsAmaze? Sign up!
                    </p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
