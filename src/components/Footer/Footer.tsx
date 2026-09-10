import Logo from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="container mx-auto p-8 flex justify-between gap-13">
        <div className="">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
          </div>
          <div className="flex">
            <p>Github</p>
            <p>Twitter</p>
            <p>Linkedln</p>
          </div>
        </div>
        <div className="flex flex-1 gap-16">
          <ul className="flex flex-col">
            <li>Product</li>
            <li>Home</li>
            <li>Technologies</li>
            <li>Project</li>
          </ul>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Contact</li>
            <li> Career </li>
          </ul>
          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
        </div>
      </div>
      <div>
        <p></p>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
