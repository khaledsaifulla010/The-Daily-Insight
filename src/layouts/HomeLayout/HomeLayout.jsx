import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import LatestNews from "../../components/Header/LatestNews/LatestNews";
import Navbar from "../../components/Navbar/Navbar";
import CategoryNews from "../../Pages/CategoryNews/CategoryNews";
import LeftNavbar from "../LayoutComponents/LeftNavbar/LeftNavbar";
import RightNavbar from "../LayoutComponents/RightNavbar/RightNavbar";

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
      <main className="w-11/12 mx-auto mt-12 grid md:grid-cols-12 gap-5">
        <aside className="left col-span-2">
          <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-8">
          <Outlet></Outlet>
        </section>
        <aside className="right col-span-2">
          <RightNavbar></RightNavbar>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
