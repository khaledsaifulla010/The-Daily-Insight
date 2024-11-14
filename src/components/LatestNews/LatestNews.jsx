import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div>
      <div className="flex items-center mt-12">
        <h1 className="bg-[#D72050] text-white p-3 font-black rounded-l-lg border">
          Latest
        </h1>
        <Marquee
          pauseOnHover={true}
          className="space-x-10 font-black bg-slate-100 p-3 rounded-r-lg border border-slate-100"
        >
          <Link>
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet.
          </Link>
          <Link>
            Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine.
          </Link>
          <Link>9 Things to do in Colorado this Labor Day weekend.</Link>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
