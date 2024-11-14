import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { IoEyeSharp } from "react-icons/io5";
const SingleNewsCard = ({ singleNews }) => {
  const { author, title, image_url, details, rating, total_view } = singleNews;

  return (
    <div className=" border rounded-xl w-[900px]  ml-2 mt-8">
      <div className="card">
        <div className="flex items-center mb-4 bg-base-200 p-2 ">
          <img src={author.img} className="w-10 h-10 rounded-full" />
          <div className="ml-3">
            <p className="text-lg font-bold">{author.name}</p>
            <p className="text-base font-semibold text-gray-600">
              {author.published_date}
            </p>
          </div>
          <div className="ml-[550px]">
            <button className="ml-auto btn btn-ghost btn-circle text-black hover:bg-gray-100 text-xl ">
              <CiBookmark />
            </button>
            <button className="ml-auto btn btn-ghost btn-circle text-black hover:bg-gray-100 text-xl ">
              <GoShareAndroid />
            </button>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-[23px] mt-2 font-black">{title}</h2>

          <img src={image_url} alt="News" className="my-4 rounded-lg" />

          <p className="text-base text-justify font-semibold text-gray-500 mb-4 p-1">
            {details}
          </p>

          <button className="-ml-[760px] text-orange-500 font-semibold -mt-2">
            Read More...
          </button>
          <div className="divider p-1"></div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center rating-sm">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <span className="ml-1 mt-1 text-lg font-semibold text-gray-600">
                {rating.number}
              </span>
            </div>
            <div className="text-gray-500 text-lg font-semibold flex items-center gap-2">
              <IoEyeSharp />
              {total_view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
