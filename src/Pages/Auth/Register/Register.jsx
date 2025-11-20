import React from 'react';
import { useForm } from 'react-hook-form';
import UseAuth from '../../../Hooks/UseAuth';
import { Link } from 'react-router';
import SocialLogin from '../SocailLogin/SocialLogin';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { registerUser } = UseAuth();

  const handleRegistration = (data) => {
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      });

    console.log('after registration', data);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="p-6 rounded-xl shadow-md w-[330px]">
        
        <form onSubmit={handleSubmit(handleRegistration)}>
          <h3 className="text-2xl text-center font-bold mb-2">Create an Account</h3>
          <p className="text-center mb-4">Fill the form to register</p>

          <fieldset className="fieldset">

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-400 text-sm">Email is required.</p>
            )}

            {/* Password */}
            <label className="label mt-3">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
              })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be 6 characters or longer
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500 text-sm">
                Password must be at least 8 characters, 1 uppercase, 1 lowercase, 1 number
              </p>
            )}

            {/* Register Button */}
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </fieldset>
        </form>

        {/* Login Link */}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link className="text-blue-500 underline" to="/login">
            Login
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

export default Register;
