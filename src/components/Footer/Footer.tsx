import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col gap-14 px-4 py-8 md:px-8">
      <div className="flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex flex-col gap-4">
          <div>
            <img src={Logo} alt="Dev Stack logo" />
          </div>

          <div>
            <p className="max-w-[462px] text-gray-600">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
          </div>

          <div className="flex justify-start gap-4">
            <p>GitHub</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
          </div>
        </div>

        <div className="flex flex-1 gap-8">
          <ul className="flex-1 flex flex-col gap-3">
            <li>Product</li>
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>

          <ul className="flex-1 flex flex-col gap-3">
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>

          <ul className="flex-1 flex flex-col gap-3">
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 border-t pt-6 text-sm text-gray-500 md:flex-row">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-3">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
