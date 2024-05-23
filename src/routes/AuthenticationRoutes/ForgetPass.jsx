import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ForgetPass = () => {
  const [confirmMsg,setConfirmMsg]=useState(false);
  const {forgetPass}=useAuth();
  const handleForgetPass = (e) => {
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    forgetPass(email)
    .then(()=>{
        setConfirmMsg(true);
        e.reset();
    })
  };
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
            className="border-2 w-1/2 border-gray-400 rounded-md focus:outline-none pl-2"
          />
          <div>
            {
                confirmMsg&& <p className="text-green-600 my-2">Email sent for password reset!</p>
            }
        </div>
         <div className="flex justify-between mt-5" >
          <Link to='/login'>
          <button className="btn btn-primary">
            Back to login
          </button>
          </Link>
          <button className="btn hover:text-white hover:bg-red-800 bg-red-600 text-white">
            Send me link!
          </button>
          
        </div>
        </form>
        
       
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
