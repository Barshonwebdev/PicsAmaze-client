import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {

    const {googleLogin}=useAuth();
    const handleGoogleLogin=()=>{
        googleLogin();
    }
  return (
    <div>
      <div>
        <p>login</p>
        <Link to={"/"}>
          <button className="btn ml-2 bg-red-700 text-white">Home</button>
        </Link>
      </div>

      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left px-5">
              <h1 className="text-5xl font-bold">Login at PicsAmaze!</h1>
              <p className="py-6 md:mr-32 ">
                Get your photos ready! picsAmaze lets you embark on a journey full of ideas expressed with photography and images. Login to further proceed and open the doors to ideas across the globe!
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6 gap-5">
                  <button className="btn text-white bg-red-600">Login</button>
                  <button onClick={handleGoogleLogin} className="btn bg-blue-600 text-white">Google</button>
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
