import Logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <div className="border-b border-gray-200">
      <nav className="container mx-auto px-8 flex justify-between items-center min-h-[80px]">
        <div>
          <img src={Logo} alt="Dev Stack" />
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
        <div className="flex gap-5">
          <button className="btn btn-ghost text-sm font-semibold">
            Sign In
          </button>
          <button className="btn btn-secondary rounded-full px-6 py-4 text-sm font-semibold">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
