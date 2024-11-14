import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {

    const news = useLoaderData()
    console.log(news);


    return (
        <div>
            <h1>All category</h1>
        </div>
    );
};

export default CategoryNews;