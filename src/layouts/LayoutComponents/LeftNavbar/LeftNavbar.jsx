import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="mb-4">
      <h1 className="font-black text-xl ml-2">
        All Categories ({categories.length}){" "}
      </h1>

      <div className="flex flex-col space-y-4 mt-8 w-[200px]  font-semibold">
        {categories.map((category) => (
          <button
            className="bg-slate-100 p-3 text-base border rounded-xl"
            key={category.category_id}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
