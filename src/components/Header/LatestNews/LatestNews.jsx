import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center mt-12">
      <h1 className="bg-[#D72050] text-white p-3 font-black rounded-l-lg border">
        Latest
      </h1>
      <Marquee
        pauseOnHover={true}
        className="space-x-10 font-black bg-slate-100 p-3 rounded-r-lg border border-slate-100"
      >
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
          consequuntur recusandae quo non.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
          consequuntur recusandae quo non.
        </Link>
        <Link to={"/news"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi itaque
          consequuntur recusandae quo non.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
