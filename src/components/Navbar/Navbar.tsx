import Logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <nav className="container mx-auto flex min-h-[80px] items-center justify-between px-4 md:px-8">
        <div>
          <img src={Logo} alt="Dev Stack logo" />
        </div>
        <div>
          <ul className="flex gap-8 justify-center items-center text-sm font-semibold">
            <li className="text-[#D91B7E]">Home</li>
            <li className="text-[#475569]">Technologies</li>
            <li className="text-[#475569]">Projects</li>
            <li className="text-[#475569]">About</li>
            <li className="text-[#475569]">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-ghost text-sm font-semibold">
            Sign In
          </button>
          <button className="btn btn-secondary rounded-full px-6 text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
