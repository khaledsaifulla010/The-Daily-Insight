import moment from "moment";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-12">
        <img className="w-[420px]" src={logo} />
        <h1 className="text-lg font-black text-slate-600">
          Journalism Without Fear or Favour
        </h1>
        <p className="font-semibold text-slate-700">
          {moment().format("dddd, MMMM Do YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
