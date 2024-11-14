import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-12">
        <img className="w-[350px]" src={logo} />
        <h1 className="text-base font-black text-slate-600">
          Journalism Without Fear or Favour
        </h1>
      </div>
    </div>
  );
};

export default Header;
