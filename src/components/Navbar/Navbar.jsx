import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("signOut");
        toast.success("Successfully Logged Out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
              {user ? (
                // <img className="border rounded-full" src= {user.photoURL} />
                <h1 className="text-base font-black border rounded-xl p-2">
                  {user?.displayName}
                </h1>
              ) : (
                <FaUserCircle></FaUserCircle>
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow border font-bold text-base"
            >
              <li>
                <Link to={"/login-register"}>Login</Link>
              </li>
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                {user ? (
                  <button onClick={handleSignOut}>
                    Sign Out <FaSignOutAlt />
                  </button>
                ) : (
                  ""
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
