import React, { useState } from "react";
import authService from "../../appwrite/auth";
import { data, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../store/authSlice";
import Input from "./Input";
import Button from "./Button";
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"></div>
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Create an Account
      </h2>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Already have an account?&nbsp;
        <Link className="text-blue-600 hover:underline" to="/login">
          Sign In
        </Link>
      </p>
      {error && <p>{error}</p>}
      <form className="mt-6 space-y-4" onSubmit={handleSubmit(create)}>
        <div>
          <Input
            label="Full Name: "
            placeholder="Enter your full name"
            {...register("name", {
              required: true,
            })}
          />
          <Input
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (value) => {
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return emailRegex.test(value) || "Invalid email address";
                },
              },
            })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
