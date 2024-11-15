import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        toast.success("Successfully Logged in!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="font-black text-xl ">Login With</h1>

      <div className="grid gap-4 mt-4">
        <button
          onClick={handleGoogleSignIn}
          className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[210px]"
        >
          <FcGoogle className="ml-3"></FcGoogle>
          Login With Google
        </button>
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[210px]">
          <FaGithub className="ml-3"></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
