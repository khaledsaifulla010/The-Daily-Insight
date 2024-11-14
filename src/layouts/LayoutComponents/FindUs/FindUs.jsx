import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-16">
      <h1 className="font-black text-xl">Find Us On</h1>
      <div className="grid gap-4 mt-4">
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[170px]">
          <FaFacebook className="ml-6"></FaFacebook>
          Facebook
        </button>
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[170px]">
          <FaTwitter className="ml-6"></FaTwitter>
          Twitter
        </button>
        <button className="border-2 p-2 rounded-xl flex items-center gap-2 font-semibold w-[170px]">
          <FaInstagram className="ml-6"></FaInstagram>
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
