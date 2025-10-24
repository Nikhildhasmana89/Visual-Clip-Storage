import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../store/authSlice";
import { Input, Button } from "../index";
function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6">
        <div className="mb-8 text-center">
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Create a New Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?&nbsp;
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline transition-colors duration-200"
            >
              Sign In
            </Link>
          </p>
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center"
            role="alert"
          >
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(create)} className="space-y-5">
          <div>
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", {
                required: "Full name is required",
              })}
            />
          </div>

          <div>
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>

          <div>
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform duration-200 transform hover:scale-105"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
