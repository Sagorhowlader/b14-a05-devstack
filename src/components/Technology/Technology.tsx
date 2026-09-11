import TechnologyList from "./TechnologyList";
import type { ITechnologyType } from "../../dataType/technologyDataType";
import { Suspense } from "react";
const fetchTechnologyData = async (): Promise<ITechnologyType[]> => {
  const response = await fetch("/data.json");
  const technologiesData = await response.json();
  return technologiesData;
};
const Technology = () => {
  const technologyDataPromise = fetchTechnologyData();
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col mb-10 gap-2">
        <h1 className="text-4xl font-extrabold">
          Explore the <span className="text-[#ec4899]">Technologies</span>
        </h1>
        <p>Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="flex flex-row gap-3 items-start">
        {/* Left Div */}
        <div className="flex-1">
          <Suspense fallback={"Loading....."}>
            <TechnologyList technologyPromise={technologyDataPromise} />
          </Suspense>
        </div>
        {/* Right Div */}
        <div className="card w-96 bg-base-100 card-md shadow-sm">
          <div className="card-body p-5">
            <h2 className="card-title">Your Stack</h2>
            <p>No technologies selected yet.</p>
            <div className="flex justify-center  items-center border border-dashed p-6">
              <h1>Your stack is empty.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
