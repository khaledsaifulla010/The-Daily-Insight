import { useLoaderData } from "react-router-dom";
import SingleNewsCard from "../SingleNewsCard/SingleNewsCard";

const CategoryNews = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      {/* <h1> News : {news.data.length} </h1> */}
      <h1 className="font-black text-xl ml-2">Dragon News Home</h1>
      <div className="space-y-10">
        {news.data.map((singleNews) => (
          <SingleNewsCard
            key={singleNews.id}
            singleNews={singleNews}
          ></SingleNewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
