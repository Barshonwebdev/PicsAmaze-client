import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
        <div>
          <Link to={"/"}>
            <button className="btn ml-2 bg-red-700 text-white">Home</button>
          </Link>
          
        </div>
  
        <div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:space-x-12 lg:flex-row-reverse">
              <div className="text-center lg:text-left px-5 lg:ml-10">
                <h1 className="text-5xl font-bold">Register your account!</h1>
                <p className="py-6 lg:mr-52 ">
                  Create a new account just for you! It&apos;s super easy!
                </p>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                    
                  </div>
                  <button className="btn mt-3 hover:bg-red-800 text-white bg-red-600">
                    Sign up
                  </button>
                  <Link to='/login' className="mx-auto mt-5">
                    <p className=" text-sm font-semibold">
                      Already on PicsAmaze? Sign in!
                    </p>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;