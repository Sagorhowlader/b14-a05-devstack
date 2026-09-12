import { IoMdMenu } from "react-icons/io";
import Logo from "../../assets/logo-text.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex min-h-20 items-center justify-between gap-2 px-5 md:px-8">
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <IoMdMenu className="h-full w-7" />
        </button>

        {/* Logo */}

        <img src={Logo} alt="Dev Stack logo" className="mx-auto md:mx-0" />

        {/* Desktop navigation */}
        <div>
          <ul className="hidden items-center justify-center gap-8 text-sm font-semibold md:flex">
            <li className="text-brand-gradient">Home</li>
            <li className="text-[#475569]">Technologies</li>
            <li className="text-[#475569]">Projects</li>
            <li className="text-[#475569]">About</li>
            <li className="text-[#475569]">Contact</li>
          </ul>
        </div>

        {/* Authentication buttons */}
        <div className="flex items-center p-1 md:gap-4">
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
