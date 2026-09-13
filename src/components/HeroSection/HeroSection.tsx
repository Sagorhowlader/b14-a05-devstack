import HeroImage from "../../assets/banner-stack.png";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col items-center px-5 text-center lg:flex-row lg:justify-between lg:gap-10 lg:px-8 lg:text-start">
      {/* Hero Content */}
      <div className="flex-1">
        <div className="pb-5">
          <h1 className="flex flex-col pb-6 pt-6 text-3xl font-extrabold leading-tight md:text-6xl">
            <span className="text-slate-950">Build Your Ideal</span>
            <span className="text-brand-gradient">Development Stack</span>
          </h1>

          <p className="text-slate-500 text-xs lg:text-xl">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 lg:justify-start">
          <button className="btn w-40 border-0 bg-brand-gradient text-[10px] text-white md:w-48 md:text-[14px] md:btn-lg">
            Explore Technologies
          </button>

          <button className="btn w-40 border bg-base-100 border-[#94A3B8]/40 text-[10px] text-slate-500 md:w-48 md:text-[14px] md:btn-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex flex-1 justify-end">
        <img
          src={HeroImage}
          alt="Development stack illustration"
          className="max-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
