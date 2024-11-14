import Header from "../../components/Header/Header";
import LatestNews from "../../components/Header/LatestNews/LatestNews";
import Navbar from "../../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto mt-8">
        <Navbar></Navbar>
      </nav>
    </div>
  );
};

export default HomeLayout;
