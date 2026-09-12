import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="container mx-auto flex flex-col gap-14 px-4 py-8 md:px-8">
        {/* Top Section */}
        <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center gap-6 text-center md:items-start md:text-left">
            <div className="flex flex-col items-center space-y-4 md:items-start">
              <img src={Logo} alt="Dev Stack logo" />

              <p className="max-w-80 text-gray-600 lg:max-w-115">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>
            </div>

            <div>
              <ul className="flex gap-4 list-disc list-inside md:list-none">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition hover:text-black"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition hover:text-black"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 transition hover:text-black"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation - Hidden on Mobile */}
          <div className="hidden flex-1 justify-around gap-8 md:flex lg:flex">
            <ul className="space-y-3">
              <li className="font-semibold text-gray-900">Product</li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Projects
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold text-gray-900">Company</li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Careers
                </a>
              </li>
            </ul>

            <ul className="space-y-3">
              <li className="font-semibold text-gray-900">Legal</li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex w-full justify-between border-t border-gray-200 px-4 pt-4 text-center text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-black">
              Privacy
            </a>

            <a href="#" className="hover:text-black">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
