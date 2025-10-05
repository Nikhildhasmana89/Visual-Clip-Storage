import React, { useState } from "react";
import { data, Form, Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../../store/authSlice";
import authService from "../../appwrite/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Input from "./Input";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"></div>
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
        Sign in to your account
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
      {error && (
        <p className="mt-4 text-red-500 text-center text-sm">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          label="Email"
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
        label = "Password"
        type = "password"
        placeholder = "Enter your password"
        {...register("password",{
          required: true,

        })}
        />
        <Button
        type = "Submit"
        className = "w-full"
        >Sign In</Button>
      </form>
    </div>
  );
}

export default Login;
