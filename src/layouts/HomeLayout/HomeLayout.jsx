import Header from "../../components/Header/Header";
import LatestNews from "../../components/Header/LatestNews/LatestNews";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
    </div>
  );
};

export default HomeLayout;