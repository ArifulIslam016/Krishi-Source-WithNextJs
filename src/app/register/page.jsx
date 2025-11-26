"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { use, useState } from "react";
import { Authcontext } from "@/Context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";

const Register = () => {
  const router=useRouter()
  const { CreateUser, SocialLogin, Signout, user, updateUserProfile } =
    use(Authcontext);
  const [err, setErr] = useState("");
  const [isShow, setShow] = useState(true);

  const handleRegister = (e) => {
    setErr("");
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.PhotoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const updatedProfile = {
      displayName: name,
      photoURL: photoUrl,
    };
    if (password.length < 6) {
      setErr("Password must be 6 charecters");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setErr("Passwors Should be contain atleast 1 locarcase");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setErr("Passwors Should be contain atleast 1 uppercase");
      return;
    }
    CreateUser(email, password)
      .then(() =>
        updateUserProfile(updatedProfile)
          .then(() => {
            toast.success("Registration Sucessful!")
            router.push('/')
          })
          .catch((err) => {
            console.log(err)
          })
          
      )
      .catch((err) => setErr(err.message));
  };
  const handleSocialLogin=()=>{
    SocialLogin().then(()=>{
      toast.success("Registration Sucessful!")
      router.push('/')
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-2xl font-bold text-gray-700 text-center pt-13  ">
          Register your account
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name Section */}
              <label className="label text-lg text-black font-semibold">
                Name
              </label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              {/* Photo Url Section */}
              <label className="label text-lg text-black font-semibold">
                Photo Url
              </label>
              <input
                type="text"
                className="input"
                placeholder="Paste Your Photo Url"
                name="PhotoUrl"
              />
              {/* Password Section */}
              <label className="label text-lg text-black font-semibold">
                Email
              </label>
              <input
                type="email"
                className="input"
                placeholder="Email"
                name="email"
              />
              {/* Email Section */}
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
              <a className="link link-hover">Forgot password?</a>
            </div> */}
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </form>
          <button onClick={handleSocialLogin} className="btn bg-white text-black border-[#e5e5e5]">
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
          <span>
            Alredy Have An Account ?{" "}
            <Link href={"/login"} className="text-secondary">
              Login
            </Link>
            {err && <p className="text-red-600">{err}</p>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
