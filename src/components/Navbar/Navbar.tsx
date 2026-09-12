import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/logo-text.png";
const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto flex min-h-20 items-center justify-between px-5 gap-2 md:px-8">
        <div className="md:hidden gap-1.5">
          <IoMdMenu />
        </div>
        <div>
          <img src={Logo} alt="Dev Stack logo" />
        </div>
        <div>
          <ul className="hidden md:flex gap-8 justify-center items-center text-sm font-semibold">
            <li className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Home
            </li>
            <li className="text-[#475569]">Technologies</li>
            <li className="text-[#475569]">Projects</li>
            <li className="text-[#475569]">About</li>
            <li className="text-[#475569]">Contact</li>
          </ul>
        </div>
        <div className="p-1 flex items-center md:gap-4">
          <button className="btn btn-ghost text-sm font-semibold">
            Sign In
          </button>
          <button className="btn btn-secondary rounded-full text-sm font-semibold md:px-6">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
