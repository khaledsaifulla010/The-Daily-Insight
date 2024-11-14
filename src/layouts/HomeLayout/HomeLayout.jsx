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
      <main className="w-11/12 mx-auto mt-12 grid md:grid-cols-12 gap-3">
        <aside className="left col-span-3">Left Navbar</aside>
        <section className="col-span-6">Main Content</section>
        <aside className="right col-span-3">Right Navbar</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
