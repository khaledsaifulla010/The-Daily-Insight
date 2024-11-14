import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start"></div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  flex items-center gap-32 font-bold text-lg text-slate-600">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/career"}>Career</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className=" text-3xl ">
              <FaUserCircle></FaUserCircle>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border font-bold text-base"
            >
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
