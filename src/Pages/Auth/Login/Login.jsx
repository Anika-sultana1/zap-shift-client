import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocailLogin/SocialLogin';

const Login = () => {

  const { register, handleSubmit, formState: { errors } , getValues} = useForm();
  const { signInUser ,forGetPassword} = UseAuth();
const location = useLocation();
const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
        navigate(location?.state || '/')
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlePasswored = (email)=>{

  if (!email) {
    alert("Please enter your email first!");
    return;
  }

    forGetPassword(email)
    .then(result => {
      console.log('forget password complete',result)
      alert('your password will reset , please check your inbox')
      
    })
    .catch(error => {
      console.log(error)
    })

  }

  return (
    <div className="flex justify-center mt-10">

      {/* Login Form */}
      <div className="p-6 rounded-xl shadow-md w-[330px]">
        <form onSubmit={handleSubmit(handleLogin)}>

          <h3 className="text-3xl font-semibold text-center">Welcome back</h3>
          <p className="text-center mb-4">Please Login</p>

          <fieldset className="fieldset">

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              {...register('email', { required: true })}
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}

            {/* Password */}
            <label className="label mt-3">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              {...register('password', { required: true, minLength: 6 })}
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be 6 characters long
              </p>
            )}

            {/* Forgot password */}
            <div>
              <a onClick={()=>handlePasswored(getValues('email'))} className="link link-hover text-sm mt-2 inline-block">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button className="btn btn-neutral mt-4 w-full">Login</button>

          </fieldset>
        </form>

        {/* Register Link */}
        <p className="text-center mt-3">
          New to Zap Shift?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>

        {/* Social Login */}
        <div className="mt-4">
          <SocialLogin />
        </div>

      </div>
    </div>
  );
};

export default Login;
