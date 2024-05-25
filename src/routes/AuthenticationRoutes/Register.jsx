import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const Register = () => {
    const {createUser,user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const from=location?.state?.from?.pathname || '/';
    const [confirm,setConfirm]=useState(true);
    const handleSignup=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        const confirmPass=form.confirmPassword.value;
        if(pass!==confirmPass){
          setConfirm(false);
          alert('Write your password again correctly');
          e.target.reset();
        }

        if(pass===confirmPass){
          createUser(email,pass)
        .then(()=>{
            e.target.reset();
            if(user){
              navigate(from)
            }
        })
        }
        
    }
    return (
        <div>
       
  
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
                <form onSubmit={handleSignup} className="card-body">
                <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                    name="email"
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
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="confirm your password"
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