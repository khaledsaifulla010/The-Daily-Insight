import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h1 className="font-black text-xl ">Login With</h1>

      <div className="grid gap-4 mt-4">
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[210px]">
          <FcGoogle className="ml-3"></FcGoogle>Login With Google
        </button>
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[210px]">
          <FaGithub className="ml-3"></FaGithub> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
