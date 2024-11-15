import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import AuthJS from "../AuthJS/AuthJS";
import "../AuthStyles/AuthStyles.css";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRegister = () => {
  const { createUser, signIn } = useContext(AuthContext);

  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(name, email, password);

    //create user//

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Register!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const name = e.target.email.value;
    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(name, email, password);

    //signIn //
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="main-container">
        <div className="container" id="main">
          <div className="sign-up">
            <form action="#" onSubmit={handleCreateUser}>
              <h1 className="font-extrabold text-3xl ">Create Account</h1>
              {/* <div className="flex items-center gap-6 mt-4 mb-4">
                <button className="text-3xl">
                  <FcGoogle></FcGoogle>
                </button>
                <button className="text-3xl">
                  <FaGithub></FaGithub>
                </button>
                <button className="text-3xl text-blue-600">
                  <FaFacebook></FaFacebook>
                </button>
              </div> */}
              <p className="font-bold text-xl mt-2">
                Or Use Your Email For Registration
              </p>
              <div className="mt-8 ">
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </div>
              <button className="mt-2 w-24 h-12 p-2 rounded-xl bg-[#ff4b2b] text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Sign Up
              </button>
            </form>
          </div>
          <div className="sign-in">
            <form action="#" onSubmit={handleSignIn}>
              <h1 className="font-extrabold text-3xl ">Please Sign In</h1>
              {/* <div className="flex items-center gap-6 mt-4 mb-4">
                <button className="text-3xl">
                  <FcGoogle></FcGoogle>
                </button>
                <button className="text-3xl">
                  <FaGithub></FaGithub>
                </button>
                <button className="text-3xl text-blue-600">
                  <FaFacebook></FaFacebook>
                </button>
              </div> */}
              <p className="font-bold text-xl mt-4 ">
                Or Use Your Existing Account
              </p>
              <div className="mt-8 ">
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                ></input>
                <input
                  className="mb-4 w-full h-12 p-2 rounded-xl border-gray-200 border-2"
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  required
                ></input>
              </div>
              <a
                className="-ml-60 text-sm text-red-600 font-bold mb-4 underline"
                href="#"
              >
                Forget Your Password?
              </a>
              <button className="mt-2 w-24 h-12 p-2 rounded-xl bg-[#ff4b2b] text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1 className="font-extrabold text-3xl mb-10">Welcome Back!</h1>
                <p className="font-bold text-xl ">
                  To Keep Connected With US Please Login With Your Personal Info
                </p>
                <button
                  className="mt-8 w-32 h-12 p-2 rounded-xl bg-transparent text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer border-2 border-white flex items-center justify-center gap-2"
                  id="signIn"
                  onClick={AuthJS}
                >
                  <FaArrowAltCircleLeft></FaArrowAltCircleLeft> Sign In
                </button>
              </div>
              <div className="overlay-right">
                <h1 className="font-extrabold text-3xl mb-10">
                  Hello, Friend!
                </h1>
                <p className="font-bold text-xl ">
                  Enter Your Personal Details and Start Your Journey With US!
                </p>
                <button
                  className="mt-8 w-32 h-12 p-2 rounded-xl bg-transparent text-white font-extrabold transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer border-2 border-white flex items-center justify-center gap-2"
                  id="signUp"
                  onClick={AuthJS}
                >
                  Sign Up <FaArrowAltCircleRight></FaArrowAltCircleRight>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
