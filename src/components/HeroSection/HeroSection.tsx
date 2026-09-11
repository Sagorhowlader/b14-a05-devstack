import HeroImage from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex-1">
        <div className="pb-10">
          <h1 className="flex flex-col pb-6 text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-slate-950">Build Your Ideal</span>
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-slate-500 max-w-[571px]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn btn-lg bg-gradient-to-r from-red-500 via-pink-600 to-purple-700 text-white border-0">
            Explore Technologies
          </button>

          <button className="btn btn-lg">Learn More</button>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={HeroImage}
          alt="Development stack illustration"
          className="max-w-full"
        />
      </div>
    </div>
  );
};

export default HeroSection;
