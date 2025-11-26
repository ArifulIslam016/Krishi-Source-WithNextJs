"use client";
import React, { use, useState,  } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { Authcontext } from "@/Context/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";

const Login = () => {
  const { Signin, SocialLogin } = use(Authcontext);
  const router=useRouter()
  // const location = useLocation();
  const [eror, setEror] = useState("");
  const [isShow, setShow] = useState(true);
  const [stateEmai, setStateEmail] = useState();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Signin(email, password).then(() => {
      toast.success("Login Sucessful!");
      router.push('/')
    });
  };
  const handleSocialLogin = () => {
    SocialLogin().then(() => {
      toast.success("Login Sucessful!");
      router.push('/')
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">
          Login your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label text-lg text-black font-semibold">
                Email
              </label>
              <input
                onChange={(e) => setStateEmail(e.target.value)}
                type="email"
                className="input"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label text-lg text-black font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  type={isShow ? "password" : "text"}
                  className="input"
                  placeholder="Password"
                  name="password"
                  required
                />
                {isShow ? (
                  <FaEye
                    onClick={() => setShow(!isShow)}
                    className="absolute top-4 right-5 w-[40px]"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setShow(!isShow)}
                    className="absolute top-4 right-5 w-[40px]"
                  />
                )}
              </div>

              {/* <div>
                <Link state={stateEmai} to={'/forgetPassword'} className="link link-hover">Forgot password?</Link>
              </div> */}
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <button
            onClick={handleSocialLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          <p>
            Don't Have An Account ?{" "}
            <Link href={"/register"} className="text-secondary">
              Register
            </Link>
          </p>
          {eror && <p className="text-red-500">{eror}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
